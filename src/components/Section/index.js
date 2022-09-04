import React from "react";
import classNames from "classnames/bind";

import styles from "./Section.module.scss";

const cx = classNames.bind(styles);

const Section = (props, className) => {
    return <div className={cx("section", className)}>{props.children}</div>;
};
export const SectionBody = (props) => {
    return <div className={cx("section-body")}>{props.children}</div>;
};
export const SectionTilte = (props) => {
    return <div className={cx("section-title")}>{props.children}</div>;
};

export default Section;
