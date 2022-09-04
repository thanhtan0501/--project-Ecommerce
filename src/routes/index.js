import config from "~/config";
// Import Layout
// import { HeaderOnly } from "~/layouts";

import Cart from "~/pages/Cart";
import Catalog from "~/pages/Catalog";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Contact from "~/pages/Contact";
import About from "~/pages/About";
import Policy from "~/pages/Policy";
// import Search from "~/pages/Search";
// import Live from "~/pages/Live";

// Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.product, component: Product },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.about, component: About },
    { path: config.routes.policy, component: Policy },
    // { path: config.routes.accessories, component: null },
    // { path: config.routes.contact, component: null },
];
// Router cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
