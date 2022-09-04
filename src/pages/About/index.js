import React from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

const About = (props) => {
    return (
        <Helmet title="Giới thiệu">
            <div className={cx("about")}>About</div>
        </Helmet>
    );
};

export default About;
