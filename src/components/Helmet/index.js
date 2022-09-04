import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
    if (props.title === undefined) document.title = "HNOSS";
    else document.title = props.title + " - HNOSS";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>{props.children}</div>;
};

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Helmet;
