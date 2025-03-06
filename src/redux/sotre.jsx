import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../redux/slice/ThemeSlice'
import popUpReducer from '../redux/slice/PopUpSlice'
import sendMessageReducer from './slice/MailSendSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        popUp: popUpReducer,
        messageSender: sendMessageReducer
    },
})