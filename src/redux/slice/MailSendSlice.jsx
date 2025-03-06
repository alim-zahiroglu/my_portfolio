import { createSlice } from '@reduxjs/toolkit';
import { sendMessage } from '../../api/massageSend';

const initialState = {
    isMessageSent: false,
    isError: false,
    isLoading: false,
    invalidEmail: null,


};

const senMessageSlice = createSlice({
    name: 'messageSend',
    initialState,
    reducers: {
        resetState: (state) => {
            state.isMessageSent = false;
            state.isError = false;
            state.isLoading = false;
        }
    },
    extraReducers(builder) {
        builder.addCase(sendMessage.fulfilled, (state) => {
            state.invalidEmail = null;
            state.isLoading = false;
            state.isMessageSent = true;
            state.isError = false;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.isMessageSent = false;
            state.isError = true;
            state.isMessageSent = false;

            if (action.payload === "Connection Error" || action.payload === "Something went wrong") {
                state.invalidEmail = null;
            }
            else {
                console.log("first action.payload: ", action.payload);
                state.invalidEmail = action.payload;
            }

        });
        builder.addCase(sendMessage.pending, (state) => {
            state.isLoading = true;
        });
    }
});

export const { resetState } = senMessageSlice.actions;
export default senMessageSlice.reducer;