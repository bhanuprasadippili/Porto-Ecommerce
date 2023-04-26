import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuid} from "uuid";

const ProductsSlice4 = createSlice({
    name: "Products4",
    initialState: {
        value: [],
        error: null,
        status: "pending"

    },
    reducers: {},
    extraReducers: (builder) =>  builder
        
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    
})


export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/products_t65vxn.json";
    try {
        const { data } = await axios.get(url);
        return data.map(e => ({...e,id:uuid()}));
    } catch (error) {
        return error
    }
})

export default ProductsSlice4;