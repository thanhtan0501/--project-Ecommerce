import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/Components/Header";
import Footer from "~/layouts/Components/Footer";
import ProductViewModal from "~/components/ProductViewModal";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <div className={cx("main")}>{children}</div>
            </div>
            <Footer />
            <ProductViewModal />
        </div>
    );
}

export default DefaultLayout;
