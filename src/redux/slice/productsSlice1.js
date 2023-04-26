import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsSlice1 = createSlice({
    name: "Products1",
    initialState: {
        value: [],
        error: null,
        status: "pending"

    },
    reducers: {},
    extraReducers: (builder) =>  builder
        
        .addCase(fetchCarouselProducts1.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchCarouselProducts1.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        .addCase(fetchCarouselProducts1.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    
})


export const fetchCarouselProducts1 = createAsyncThunk("Carousel1/fetchProducts", async () => {
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/featured_dclokw.json";
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        return error
    }
})

export default ProductsSlice1;