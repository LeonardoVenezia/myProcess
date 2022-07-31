import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../services/user";

export const getUserTunk = createAsyncThunk(
    'get/getUser',
    async () => {
        return await getUser();
    });