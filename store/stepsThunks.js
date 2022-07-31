import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSteps } from "../services/steps";

export const getStepsTunk = createAsyncThunk(
    'get/getSteps',
    async () => {
        return await getSteps();
    });