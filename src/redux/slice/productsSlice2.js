import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsSlice2 = createSlice({
    name: "Products2",
    initialState: {
        value: [],
        error: null,
        status: "pending"

    },
    reducers: {},
    extraReducers: (builder) =>  builder
        
        .addCase(fetchCarouselProducts2.pending, (state, action) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchCarouselProducts2.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        .addCase(fetchCarouselProducts2.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    
})


export const fetchCarouselProducts2 = createAsyncThunk("Carousel2/fetchProducts", async () => {
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/best_selling_rbjv2n.json";

    
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        return error
    }
})

export default ProductsSlice2;