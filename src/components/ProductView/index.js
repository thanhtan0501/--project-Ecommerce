import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./ProductView.module.scss";
import Image from "../Image";
import Button from "../Button";
import numberWithCommas from "~/utils/numberWithCommas";
import config from "~/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "~/redux/shopping-cart/cartItemsSlice ";
import { remove } from "~/redux/product-modal/productModalSlice";

const cx = classNames.bind(styles);

const ProductView = (props) => {
    const dispatch = useDispatch();

    let product = props.product;
    if (product === undefined) {
        product = { price: 0, title: "", colors: [], size: [] };
    }
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [descriptionExpand, setDescriptionExpand] = useState();
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // có thể bị lỗi (error)

    const updateQuantity = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        } else if (type === "minus") {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    const checkOption = () => {
        if (color === undefined || size === undefined) {
            alert("Vui lòng chọn size hoặc màu mà bạn thích. Xin cảm ơn.");
            return false;
        }
        return true;
    };

    const addToCart = () => {
        if (checkOption()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };
            if (dispatch(addItem(newItem))) {
                alert("Success");
            } else {
                alert("Fail");
            }
        }
    };
    const goToCart = () => {
        if (checkOption()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };
            if (dispatch(addItem(newItem))) {
                dispatch(remove());
                navigate(config.routes.cart);
            } else {
                alert("Fail");
            }
        }
    };

    return (
        <div className={cx("product")}>
            <div className={cx("product-images")}>
                <div className={cx("product-images-list")}>
                    <div
                        className={cx("product-images-list-item")}
                        onClick={() => setPreviewImg(product.image01)}
                    >
                        <img src={product.image01} alt="" />
                    </div>
                    <div
                        className={cx("product-images-list-item")}
                        onClick={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className={cx("product-images-main")}>
                    <Image src={previewImg} />
                </div>
                <div
                    className={cx(
                        "product-description",
                        `${descriptionExpand ? "expand" : ""}`
                    )}
                >
                    <div className={cx("product-description-title")}>Mô tả</div>
                    <div
                        className={cx("product-description-content")}
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></div>
                    <div className={cx("product-description-title")}>
                        Hướng dẫn bảo quản
                    </div>
                    <div
                        className={cx("product-description-content")}
                        dangerouslySetInnerHTML={{
                            __html: product.storage_instruction,
                        }}
                    ></div>
                    <div className={cx("product-description-toggle")}>
                        <Button
                            rounded
                            onClick={() =>
                                setDescriptionExpand(!descriptionExpand)
                            }
                        >
                            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx("product-info")}>
                <h1 className={cx("product-info-title")}>{product.title}</h1>
                <div className={cx("product-info-item")}>
                    <span className={cx("product-info-item-price")}>
                        {numberWithCommas(product.price)}₫
                    </span>
                </div>
                <div className={cx("product-info-item")}>
                    <div className={cx("product-info-item-title")}>Màu sắc</div>
                    <div className={cx("product-info-item-list")}>
                        {product.colors.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setColor(item)}
                                className={cx(
                                    "product-info-item-list-item",
                                    `${color === item ? "active" : ""}`
                                )}
                            >
                                <div
                                    className={cx("circle", `bg-${item}`)}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("product-info-item")}>
                    <div className={cx("product-info-item-title")}>Kích cỡ</div>
                    <div className={cx("product-info-item-list")}>
                        {product.size.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSize(item)}
                                className={cx(
                                    "product-info-item-list-item",
                                    `${size === item ? "active" : ""}`
                                )}
                            >
                                <span
                                    className={cx(
                                        "product-info-item-list-item-size"
                                    )}
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("product-info-item")}>
                    <div className={cx("product-info-item-title")}>
                        Số lượng
                    </div>
                    <div className={cx("product-info-item-quantity")}>
                        <div
                            className={cx("product-info-item-quantity-btn")}
                            onClick={() => updateQuantity("minus")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className={cx("product-info-item-quantity-input")}>
                            {quantity}
                        </div>
                        <div
                            className={cx("product-info-item-quantity-btn")}
                            onClick={() => updateQuantity("plus")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className={cx("product-info-item")}>
                    <Button large primary onClick={() => goToCart()}>
                        Mua Ngay
                    </Button>
                    <Button large outline onClick={() => addToCart()}>
                        Thêm vào giỏ
                    </Button>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object,
};

export default ProductView;
