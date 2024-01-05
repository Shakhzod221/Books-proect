import { createSlice } from "@reduxjs/toolkit";

interface LoaderType {
    isLoading: boolean
}

const initialState: LoaderType = { 
    isLoading: false
}

const loaderSlice = createSlice({
    initialState,
    name: "loader",
    reducers: {
        startLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        andLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
})

export const {startLoading, andLoading} = loaderSlice.actions;
export default  loaderSlice.reducer;