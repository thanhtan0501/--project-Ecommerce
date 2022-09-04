import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./PolicyCard.module.scss";

const cx = classNames.bind(styles);

const PolicyCard = (props) => {
    return (
        <div className={cx("policy-card")}>
            <div className={cx("policy-card-icon")}>{props.icon}</div>
            <div className={cx("policy-card-info")}>
                <div className={cx("policy-card-info-name")}>{props.name}</div>
                <div className={cx("policy-card-info-description")}>
                    {props.description}
                </div>
            </div>
        </div>
    );
};

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default PolicyCard;
