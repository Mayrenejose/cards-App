import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './reducers'

const store = configureStore({
    reducer: {
        ticket: ticketSlice
    }
})

export default store
