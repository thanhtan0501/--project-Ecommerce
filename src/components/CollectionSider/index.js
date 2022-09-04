import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./CollectionSider.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image";

const cx = classNames.bind(styles);

const CollectionSider = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const timeOut = props.timeOut ? props.timeOut : 3000;
    const data = props.data;

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    }, [activeSlide, data]);

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    };

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [nextSlide, timeOut, props]);
    return (
        <div className={cx("collection-slider")}>
            {data.map((item, index) => (
                <CollectionSiderItem
                    key={index}
                    item={item}
                    active={index === activeSlide}
                />
            ))}

            {props.control ? (
                <div className={cx("collection-slider-control")}>
                    <div
                        className={cx("collection-slider-control-item")}
                        onClick={prevSlide}
                    >
                        <i className={cx("bx bx-chevron-left")}></i>
                    </div>
                    <div className={cx("collection-slider-control-item")}>
                        <div className={cx("index")}>
                            {activeSlide + 1}/{data.length}
                        </div>
                    </div>
                    <div
                        className={cx("collection-slider-control-item")}
                        onClick={nextSlide}
                    >
                        <i className={cx("bx bx-chevron-right")}></i>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

CollectionSider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

const CollectionSiderItem = (props) => (
    <div
        className={cx(
            "collection-slider-item",
            `${props.active ? "active" : ""}`
        )}
    >
        <Link
            to={props.item.path}
            className={cx("collection-slider-item-image")}
        >
            <Image src={props.item.img} />
        </Link>
        <div className={cx("collection-slider-item-info")}>
            <div className={cx("collection-slider-item-info-title")}>
                <span>{props.item.title}</span>
            </div>
            <div className={cx("collection-slider-item-info-description")}>
                <span>{props.item.description}</span>
            </div>
        </div>
    </div>
);

export default CollectionSider;
