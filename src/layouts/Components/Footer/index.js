import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "~/assets/images";
import config from "~/config";
import Image from "~/components/Image";
import { contactInfo } from "~/assets/fake-data/contact-info";

const cx = classNames.bind(styles);
const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: config.routes.about,
    },

    {
        display: "Tuyển dụng",
        path: config.routes.about,
    },

    {
        display: "Hệ thống cửa hàng",
        path: config.routes.about,
    },
];

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: config.routes.policy,
    },
    {
        display: "Chính sách khách hàng thân thiết",
        path: config.routes.policy,
    },
    {
        display: "Chính sách ưu đãi",
        path: config.routes.policy,
    },
];
function Footer() {
    return (
        <footer className={cx("footer")}>
            <div className={cx("footer-container")}>
                <div className={cx("footer-grid")}>
                    <div className={cx("footer-logo")}>
                        <Link to={config.routes.home}>
                            <Image src={images.logo} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <div className={cx("footer-title")}>Hỗ trợ</div>

                        {contactInfo.map((item, index) => (
                            <div key={index} className={cx("footer-content")}>
                                <span>
                                    {item.key}: <strong>{item.value}</strong>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className={cx("footer-title")}>Về HNOSS</div>
                        <div className={cx("footer-content")}>
                            {footerAboutLinks.map((item, index) => (
                                <span key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={cx("footer-title")}>Chính sách</div>
                        <div className={cx("footer-content")}>
                            {footerCustomerLinks.map((item, index) => (
                                <span key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
