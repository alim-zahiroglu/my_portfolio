import { createSlice } from '@reduxjs/toolkit';
import { sendMessage } from '../../api/massageSend';

const initialState = {
    isMessageSent: false,
    isError: false,
    isLoading: false,


};

const senMessageSlice = createSlice({
    name: 'messageSend',
    initialState,
    reducers: {
        setIsMessageSent: (state, action) => {
            state.isMessageSent = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(sendMessage.fulfilled, (state) => {
            state.isLoading = false;
            state.isMessageSent = true;
            state.isError = false;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.isMessageSent = false;
            state.isError = true;
        });
        builder.addCase(sendMessage.pending, (state) => {
            state.isLoadingloading = true;
        });
    }
});

export const { setIsMessageSent } = senMessageSlice.actions;
export default senMessageSlice.reducer;