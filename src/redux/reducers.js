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
    },
    filterPriority: (state, action) => {
      return state.filter(item => item.priority === action.payload)
    },
    filterState: (state, action) => {
      return state.filter(item => item.stateticket === action.payload)
    },
    clearFilter: (state) => {
      return initialState
    }
  }
})

export const { addTicket, removeTicket, filterPriority, filterState, clearFilter } = ticketSlice.actions
export default ticketSlice.reducer