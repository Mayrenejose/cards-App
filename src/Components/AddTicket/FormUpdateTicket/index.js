import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTicketPriority, updateTicketState } from '../../../redux/reducers'

export const FormUpdateTicket = ({ idUpdate }) => {
    const [formData, setFormData] = useState({
      priority: '',
      stateticket: '',
    })
    const dispatch = useDispatch()
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (formData.priority) {
        dispatch(updateTicketPriority({ticketId:idUpdate, newPriority:formData.priority}))
      }
      if (formData.stateticket) {
        dispatch(updateTicketState({ticketId:idUpdate, newState:formData.stateticket}))
      }
    }

    return (
      <div className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">
            Prioridad
            </label>
            <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prioridad"
            name="priority"
            onChange={handleChange}
            >
            <option>Seleccione</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
            </select>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">
            Estado:
            </label>
            <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="estado"
            name="stateticket"
            onChange={handleChange}
            >
            <option>Seleccione</option>
            <option value="abierto">Abierto</option>
            <option value="cerrado">Cerrado</option>
            </select>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Guardar Cambios
        </button>
      </div>
    )
}