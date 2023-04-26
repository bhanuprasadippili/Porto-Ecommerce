import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsSlice3 = createSlice({
    name: "Products3",
    initialState: {
        value: [],
        error: null,
        status: "pending"

    },
    reducers: {},
    extraReducers: (builder) =>  builder
        
        .addCase(fetchCarouselProducts3.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchCarouselProducts3.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        .addCase(fetchCarouselProducts3.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    
})


export const fetchCarouselProducts3 = createAsyncThunk("Carousel3/fetchProducts", async () => {
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/latest_nmhxsy.json";

    
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        return error
    }
})

export default ProductsSlice3;