import { createSlice } from '@reduxjs/toolkit';
import {getProducts} from '../actions/action';

const productsSlice = createSlice({
    name: 'products',
    initialState :{
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers: (builder)=>{
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    },
});
export default productsSlice.reducer;