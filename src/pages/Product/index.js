import React, { useEffect } from "react";
import classNames from "classnames/bind";

import Helmet from "~/components/Helmet";
import styles from "./Product.module.scss";
import productData from "~/assets/fake-data/product";
import { useParams } from "react-router-dom";
import Section, { SectionBody, SectionTilte } from "~/components/Section";
import ProductCard from "~/components/ProductCard";
import ProductView from "~/components/ProductView";

const cx = classNames.bind(styles);

const Product = (props) => {
    const params = useParams();
    const product = productData.getProductBySlug(params.slug);
    const relatedProducts = productData.getProducts(8);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    return (
        <Helmet title={product.title}>
            <div className={cx("wrapper")}>
                <Section>
                    <SectionBody>
                        <ProductView product={product} />
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTilte>Khám phá thêm</SectionTilte>
                    <SectionBody>
                        <div className={cx("product-grid")}>
                            {relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))}
                        </div>
                    </SectionBody>
                </Section>
            </div>
        </Helmet>
    );
};

export default Product;
