import React, { useRef, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import config from "~/config";
import { Link, NavLink } from "react-router-dom";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const mainNav = [
    { display: "Trang chủ", path: config.routes.home },
    { display: "Sản phẩm", path: config.routes.catalog },
    { display: "Giới thiệu", path: config.routes.about },
    { display: "Liên hệ", path: config.routes.contact },
];

function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add(cx("shrink"));
            } else {
                headerRef.current.classList.remove(cx("shrink"));
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const menuLeft = useRef(null);

    const menuToggle = () =>
        menuLeft.current.classList.toggle(cx("toggle-active"));

    return (
        <div ref={headerRef} className={cx("header")}>
            <div className={cx("header-container")}>
                <div className={cx("header-logo")}>
                    <Link to={config.routes.home}>
                        <Image src={images.logo} alt="logo" />
                    </Link>
                </div>
                <div className={cx("header-menu")}>
                    <div
                        className={cx("header-menu-mobile-toggle")}
                        onClick={menuToggle}
                    >
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className={cx("header-menu-left")} ref={menuLeft}>
                        <div
                            className={cx("header-menu-left-close")}
                            onClick={menuToggle}
                        >
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <NavLink
                                key={index}
                                className={(nav) =>
                                    cx(
                                        "header-menu-left-item",
                                        "header-menu-item",
                                        { active: nav.isActive }
                                    )
                                }
                                onClick={menuToggle}
                                to={item.path}
                                children={() => {
                                    return <span>{item.display}</span>;
                                }}
                            />
                        ))}
                    </div>
                    <div className={cx("header-menu-right")}>
                        <div
                            className={cx(
                                "header-menu-item",
                                "header-menu-right-item"
                            )}
                        >
                            <i className="bx bx-search-alt-2"></i>
                        </div>
                        <div
                            className={cx(
                                "header-menu-item",
                                "header-menu-right-item"
                            )}
                        >
                            <Link to={config.routes.cart}>
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div
                            className={cx(
                                "header-menu-item",
                                "header-menu-right-item"
                            )}
                        >
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
