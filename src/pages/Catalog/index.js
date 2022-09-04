import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./Catalog.module.scss";
import productData from "~/assets/fake-data/product";
import category from "~/assets/fake-data/category";
import CheckBox from "~/components/CheckBox";
import colors from "~/assets/fake-data/product-color";
import size from "~/assets/fake-data/product-size";
import Button from "~/components/Button";
import InfinityList from "~/components/InfinityList";

const cx = classNames.bind(styles);

function Catalog() {
    const initFilter = {
        category: [],
        color: [],
        size: [],
    };
    const productList = productData.getAllProducts();

    const [products, setProducts] = useState(productList);
    const [filter, setFilter] = useState(initFilter);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({
                        ...filter,
                        category: [...filter.category, item.categorySlug],
                    });
                    break;
                case "COLOR":
                    setFilter({
                        ...filter,
                        color: [...filter.color, item.color],
                    });
                    break;
                case "SIZE":
                    setFilter({
                        ...filter,
                        size: [...filter.size, item.size],
                    });
                    break;

                default:
                    break;
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(
                        (e) => e !== item.categorySlug
                    );
                    setFilter({ ...filter, category: newCategory });
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(
                        (e) => e !== item.color
                    );
                    setFilter({ ...filter, color: newColor });
                    break;
                case "SIZE":
                    const newSize = filter.size.filter((e) => e !== item.size);
                    setFilter({ ...filter, size: newSize });
                    break;

                default:
                    break;
            }
        }
    };

    const clearFilter = () => {
        setFilter(initFilter);
    };

    const updateProducts = useCallback(() => {
        let temp = productList;
        if (filter.category.length > 0) {
            temp = temp.filter((e) => filter.category.includes(e.categorySlug));
        }

        if (filter.color.length > 0) {
            temp = temp.filter((e) => {
                const check = e.colors.find((color) =>
                    filter.color.includes(color)
                );
                return check !== undefined;
            });
        }

        if (filter.size.length > 0) {
            temp = temp.filter((e) => {
                const check = e.size.find((size) => filter.size.includes(size));
                return check !== undefined;
            });
        }

        setProducts(temp);
    }, [filter, productList]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const filterRef = useRef(null);

    const showHideFilter = () =>
        filterRef.current.classList.toggle(cx("active"));

    return (
        <Helmet title="Sản phẩm">
            <div className={cx("catalog")}>
                <div className={cx("catalog-filter")} ref={filterRef}>
                    <div
                        className={cx("catalog-filter-close")}
                        onClick={() => showHideFilter()}
                    >
                        <i className=" bx bx-left-arrow-alt"></i>
                    </div>
                    <div className={cx("catalog-filter-widget")}>
                        <div className={cx("catalog-filter-widget-title")}>
                            danh mục sản phẩm
                        </div>
                        <div className={cx("catalog-filter-widget-content")}>
                            {category.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(
                                        "catalog-filter-widget-content-item"
                                    )}
                                >
                                    <CheckBox
                                        onChange={(input) =>
                                            filterSelect(
                                                "CATEGORY",
                                                input.checked,
                                                item
                                            )
                                        }
                                        label={item.display}
                                        checked={filter.category.includes(
                                            item.categorySlug
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx("catalog-filter-widget")}>
                        <div className={cx("catalog-filter-widget-title")}>
                            Màu sắc
                        </div>
                        <div className={cx("catalog-filter-widget-content")}>
                            {colors.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(
                                        "catalog-filter-widget-content-item"
                                    )}
                                >
                                    <CheckBox
                                        onChange={(input) =>
                                            filterSelect(
                                                "COLOR",
                                                input.checked,
                                                item
                                            )
                                        }
                                        label={item.display}
                                        checked={filter.color.includes(
                                            item.color
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx("catalog-filter-widget")}>
                        <div className={cx("catalog-filter-widget-title")}>
                            Kích cỡ
                        </div>
                        <div className={cx("catalog-filter-widget-content")}>
                            {size.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(
                                        "catalog-filter-widget-content-item"
                                    )}
                                >
                                    <CheckBox
                                        onChange={(input) =>
                                            filterSelect(
                                                "SIZE",
                                                input.checked,
                                                item
                                            )
                                        }
                                        label={item.display}
                                        checked={filter.size.includes(
                                            item.size
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx("catalog-filter-widget")}>
                        <div className={cx("catalog-filter-widget-content")}>
                            <Button primary small onClick={clearFilter}>
                                Xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx("catalog-filter-toggle")}>
                    <Button primary onClick={() => showHideFilter()}>
                        Bộ lọc
                    </Button>
                </div>
                <div className={cx("catalog-content")}>
                    <InfinityList data={products} />
                </div>
            </div>
        </Helmet>
    );
}

export default Catalog;
