import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";
import Image from "../Image";
import Button from "../Button";
import numberWithCommas from "~/utils/numberWithCommas";
import { set } from "~/redux/product-modal/productModalSlice";

const cx = classNames.bind(styles);
const ProductCard = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={cx("product-card")}>
            <Link to={`/catalog/${props.slug}`}>
                <div className={cx("product-card-image")}>
                    <Image src={props.img01} alt="" />
                    <Image src={props.img02} alt="" />
                </div>
                <h3 className={cx("product-card-name")}>{props.name}</h3>
                <div className={cx("product-card-price")}>
                    {numberWithCommas(props.price)}₫
                    <span className={cx("product-card-price-old")}>
                        <del>{numberWithCommas(699000)}₫</del>
                    </span>
                </div>
            </Link>
            <div className={cx("product-card-btn")}>
                <Button
                    primary
                    animate
                    leftIcon={<i className="bx bx-cart"></i>}
                    onClick={() => dispatch(set(props.slug))}
                >
                    Mua ngay
                </Button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard;
