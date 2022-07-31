import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { user } from "./userSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [user.name]: user.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
