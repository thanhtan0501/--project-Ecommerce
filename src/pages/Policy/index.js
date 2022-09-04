import React from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./Policy.module.scss";

const cx = classNames.bind(styles);

const Policy = (props) => {
    return (
        <Helmet title="Chính sách">
            <div className={cx("policy")}>Policy</div>
        </Helmet>
    );
};

export default Policy;
