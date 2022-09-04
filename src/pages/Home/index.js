import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "~/config";
import heroSliderData from "~/assets/fake-data/hero-slider";
import Helmet from "~/components/Helmet";
import HeroSlider from "~/components/HeroSlider";
import styles from "./Home.module.scss";
import Section, { SectionBody, SectionTilte } from "~/components/Section";
import policy from "~/assets/fake-data/policy";
import PolicyCard from "~/components/PolicyCard";
import productData from "~/assets/fake-data/product";
import ProductCard from "~/components/ProductCard";
import bannerMiniCollection from "~/assets/fake-data/banner-mini-collection";
import CollectionSider from "~/components/CollectionSider";

const cx = classNames.bind(styles);
function Home() {
    return (
        <Helmet>
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={5000}
            />
            <Section>
                <SectionBody>
                    <div className={cx("section-grid", "section-wrapper")}>
                        {policy.map((item, index) => (
                            <Link key={index} to={config.routes.policy}>
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </div>
                </SectionBody>
            </Section>
            <div className={cx("wrapper")}>
                <Section>
                    <SectionTilte>
                        <span className={cx("style")}>NEW</span>ARRIVALS
                    </SectionTilte>
                    <SectionBody>
                        <div className={cx("section-grid")}>
                            {productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            ))}
                        </div>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTilte>
                        Sản phẩm <span className={cx("style")}>nổi bậc</span>
                    </SectionTilte>
                    <SectionBody>
                        <div className={cx("section-grid")}>
                            {productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            ))}
                        </div>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTilte>
                        Mini <span className={cx("style")}>Collection</span>
                    </SectionTilte>
                    <SectionBody>
                        <CollectionSider
                            data={bannerMiniCollection}
                            auto
                            timeOut={5000}
                        />
                    </SectionBody>
                </Section>
            </div>
        </Helmet>
    );
}

export default Home;
