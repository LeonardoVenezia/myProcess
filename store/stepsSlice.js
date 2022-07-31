import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getStepsTunk } from "./stepsThunks";

const initialState = {
    steps: [],
    currentStep: 0,
    loading: false,
};

export const steps = createSlice({
    name: "steps",
    initialState,
    reducers: {
        setSteps(state, action) {
            createAsyncThunk();
            state.steps = action.payload;
        },
        setCurrentStep(state, action) {
            state.currentStep = action.payload;
        },
    },
    extraReducers: {
        [getStepsTunk.pending]: (state) => {
            state.loading = true
        },
        [getStepsTunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.steps = payload
        },
        [getStepsTunk.rejected]: (state) => {
            state.loading = false
        },
    }
});

export const { setSteps } = steps.actions;

export const stepsInfo = (state) => state.steps.steps;
export const currentStep = (state) => state.steps.currentStep;

export default steps;
