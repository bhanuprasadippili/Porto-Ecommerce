import { configureStore } from "@reduxjs/toolkit";


import ProductsSlice1 from "./slice/productsSlice1";
import ProductsSlice2 from "./slice/productsSlice2";
import ProductsSlice3 from "./slice/productsSlice3";

import ProductsSlice4 from "./slice/productsSlice";

import CartSlice from "./slice/cartSlice";



const store = configureStore({
    reducer: {
        Products1: ProductsSlice1.reducer,
        Products2: ProductsSlice2.reducer,
        Products3: ProductsSlice3.reducer,
        Products4: ProductsSlice4.reducer,

        Cart: CartSlice.reducer
    }
})

export default store;