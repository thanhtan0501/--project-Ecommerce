import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartItemsReducer from "./shopping-cart/cartItemsSlice ";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsReducer,
    },
});
