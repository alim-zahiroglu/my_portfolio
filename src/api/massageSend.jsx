import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/uydev/message",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Ensure cookies (tokens) are sent with requests
});


export const sendMessage = createAsyncThunk("message/send", async (message, { rejectWithValue }) => {
    try {

        const response = await api.post("/send", message);

        if (!response.data.success) {
            console.log("response.data.message", response.data.message);
            return rejectWithValue(response.data.message);
        }
        return response.data.data;

        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return rejectWithValue(
            "Connection Error"
        );
    }
});