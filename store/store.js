import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { steps } from "./stepsSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [steps.name]: steps.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
