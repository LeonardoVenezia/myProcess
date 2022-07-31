import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getUserTunk } from "./userThunks";

const initialState = {
    user: {
        name: '',
        recruiter: '',
        steps: [],
        currentStep: 0,
    },
    stepToShow: 0,
    loading: false,
};

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setStepToShow(state, action) {
            state.stepToShow = action.payload;
        },
    },
    extraReducers: {
        [getUserTunk.pending]: (state) => {
            state.loading = true;
        },
        [getUserTunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.stepToShow = payload.current;
            state.user = payload;
        },
        [getUserTunk.rejected]: (state) => {
            state.loading = false;
        },
    }
});

export const { setSteps } = user.actions;

export const stepsInfo = (state) => state.user.user.steps;
export const stepToShow = (state) => state.user.stepToShow;

export default user;
