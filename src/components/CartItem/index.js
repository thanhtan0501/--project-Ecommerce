import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import Image from "../Image";
import { Link } from "react-router-dom";
import numberWithCommas from "~/utils/numberWithCommas";
import { removeItem, updateItem } from "~/redux/shopping-cart/cartItemsSlice ";

const cx = classNames.bind(styles);

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item]);

    const updateQuantity = (type) => {
        if (type === "plus") {
            dispatch(
                updateItem({
                    ...item,
                    quantity: quantity + 1,
                })
            );
        }
        if (type === "minus") {
            if (quantity - 1 === 0) {
                let check = window.confirm(
                    `Bạn có muốn bỏ sản phẩm khỏi giỏ hàng?`
                );
                if (check) dispatch(removeItem(item));
            } else {
                dispatch(
                    updateItem({
                        ...item,
                        quantity: quantity - 1,
                    })
                );
            }
        }
    };

    const removeCartItem = () => {
        dispatch(removeItem(item));
    };

    return (
        <div className={cx("cart-item")}>
            <div className={cx("cart-item-image")}>
                <Link to={`/catalog/${item.product.slug}`}>
                    <Image src={item.product.image01} alt="" />
                </Link>
            </div>
            <div className={cx("cart-item-info")}>
                <div className={cx("cart-item-info-name")}>
                    <Link to={`/catalog/${item.product.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                    </Link>
                </div>
                <div className={cx("cart-item-info-price")}>
                    {numberWithCommas(Number(item.product.price))}
                </div>
                <div className={cx("cart-item-info-quantity")}>
                    <div className={cx("cart-item-info-item-quantity")}>
                        <div
                            className={cx("cart-item-info-item-quantity-btn")}
                            onClick={() => updateQuantity("minus")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div
                            className={cx("cart-item-info-item-quantity-input")}
                        >
                            {quantity}
                        </div>
                        <div
                            className={cx("cart-item-info-item-quantity-btn")}
                            onClick={() => updateQuantity("plus")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div
                    className={cx("cart-item-info-del")}
                    onClick={() => removeCartItem()}
                >
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = { item: PropTypes.object };

export default CartItem;
