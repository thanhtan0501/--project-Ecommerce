import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./ProductViewModal.module.scss";
import productData from "~/assets/fake-data/product";
import ProductView from "../ProductView";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "~/redux/product-modal/productModalSlice";

const cx = classNames.bind(styles);

const ProductViewModal = () => {
    const productSlug = useSelector((state) => state.productModal.value);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug));
    }, [productSlug]);

    return (
        <div
            className={cx(
                "product-view-modal",
                `${product === undefined ? "" : "active"}`
            )}
        >
            <div className={cx("product-view-modal-content")}>
                <ProductView product={product} />
                <div className={cx("product-view-modal-content-close")}>
                    <Button small text onClick={() => dispatch(remove())}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
