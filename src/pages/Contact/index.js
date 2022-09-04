import React from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./Contact.module.scss";
import { contactInfo } from "~/assets/fake-data/contact-info";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

const Contact = (props) => {
    return (
        <Helmet title="Liên hệ">
            <div className={cx("contact")}>
                <div className={cx("contact-map")}>
                    <iframe
                        title="hnoss-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.952235869394!2d106.71301265045473!3d10.738164792309936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8466505425%3A0x5b91532af4d293be!2zMzEzIE5ndXnhu4VuIFRo4buLIFRo4bqtcCwgVMOibiBQaMO6LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1662265432313!5m2!1svi!2s"
                        // width="560px"
                        // height="770px"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className={cx("contact-content")}>
                    <div className={cx("contact-content-title")}>
                        <h1>Liên hệ</h1>
                    </div>
                    <div className={cx("contact-content-info")}>
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className={cx("contact-content-info-item")}
                            >
                                <p>{item.key}</p>
                                <p>
                                    <strong>{item.value}</strong>
                                </p>
                            </div>
                        ))}
                        <div className={cx("contact-content-info-item")}>
                            <p>Thời gian làm việc</p>
                            <p>
                                <strong>
                                    Thứ 2 đến Thứ 6 từ 8h30 đến 17h30
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className={cx("contact-content-input")}>
                        <div className={cx("contact-content-title")}>
                            <h1>Gửi thắc mắc cho chung tôi</h1>
                        </div>
                        <div className={cx("contact-content-input-form")}>
                            <form>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tên của bạn"
                                />
                                <div
                                    className={cx(
                                        "contact-content-input-form-txt"
                                    )}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email của bạn"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Số điện thoại của bạn"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        required
                                    />
                                </div>
                                <textarea
                                    // value={input}
                                    // onChange={(e) => setInput(e.target.value)}
                                    rows="6"
                                    cols="50"
                                    placeholder="Nội dung"
                                />
                            </form>
                            <div
                                className={cx("contact-content-input-form-btn")}
                            >
                                <Button primary large>
                                    Gửi cho chúng tôi
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

Contact.propTypes = {};

export default Contact;
