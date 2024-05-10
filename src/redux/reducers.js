import initialState from "../data"
import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      return [...state, action.payload]
    },
    removeTicket: (state, action) => {
      return state.filter(ticket => ticket.id !== action.payload)
    }
  }
})

export const { addTicket, removeTicket } = ticketSlice.actions
export default ticketSlice.reducer