import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import productData from "~/assets/fake-data/product";
import numberWithCommas from "~/utils/numberWithCommas";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import config from "~/config";
import CartItem from "~/components/CartItem";

const cx = classNames.bind(styles);

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProducts, setCartProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemDetail(cartItems));
        setTotalProducts(
            cartItems.reduce((total, item) => total + Number(item.quantity), 0)
        );
        setTotalPrice(
            cartItems.reduce(
                (total, item) =>
                    total + Number(item.quantity) * Number(item.price),
                0
            )
        );
    }, [cartItems]);

    return (
        <Helmet title="Giỏ hàng">
            <div className={cx("cart")}>
                <div className={cx("cart-list")}>
                    <div className={cx("cart-list-title")}>
                        Giỏ hàng của bạn
                        <span> (Có {totalProducts} sản phẩm)</span>
                    </div>
                    {cartProducts.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
                <div className={cx("cart-info")}>
                    <div className={cx("cart-info-txt")}>
                        <div className={cx("cart-list-title")}>
                            Tóm tắt đơn hàng
                        </div>

                        <div className={cx("cart-info-txt-price")}>
                            <span>Tổng tiền: </span>
                            <span>{numberWithCommas(totalPrice)}đ</span>
                        </div>
                    </div>
                    <div className={cx("cart-info-btn")}>
                        <Button primary large>
                            Tiến hành đặt hàng
                        </Button>
                        <Link to={config.routes.catalog}>
                            <Button outline large>
                                Mua thêm sản phẩm
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Cart;
