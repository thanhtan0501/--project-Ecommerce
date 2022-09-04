import PropTypes from "prop-types";

import { useState } from "react";
import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";

import images from "~/assets/images";

const Image = forwardRef(
    (
        { src, className, fallback: customFallback = images.noImage, ...props },
        ref
    ) => {
        const [fallback, setFallback] = useState("");

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
                ref={ref}
                className={classNames(styles.wrapper, className)}
                src={fallback || src}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
