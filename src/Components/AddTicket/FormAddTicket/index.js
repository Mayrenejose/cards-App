import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTicket } from '../../../redux/reducers'
import { v4 as uuidv4 } from 'uuid'

export const FormAddTicket = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        type: '',
        priority: '',
        stateticket: '',
        date: ''
      })
      const dispatch = useDispatch()
    
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = e => {
        e.preventDefault()
            dispatch(addTicket({ 
            id: uuidv4(), 
            title: formData.title, 
            description: formData.description, 
            type: formData.type,
            date: formData.date,
            priority: formData.priority,
            stateticket: formData.stateticket
            }))
        console.log(formData)
      }

    return (
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre del ticket:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre del ticket"
            name="title"
            onChange={handleChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Descripcion">
            Descripción:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Descripcion"
            type="text"
            placeholder="Descripción"
            name="description"
            onChange={handleChange}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">
            Tipo:
            </label>
            <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tipo"
            name="type"
            onChange={handleChange}
            >
            <option>Seleccione</option>
            <option value="tecnico">Técnico</option>
            <option value="funcional">Funcional</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">
            Prioridad
            </label>
            <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="estado"
            name="stateticket"
            onChange={handleChange}
            >
            <option>Seleccione</option>
            <option value="abierto">Abierto</option>
            <option value="cerrado">Cerrado</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
            Fecha:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fecha"
            type="date"
            name="date"
            onChange={handleChange}
            />
        </div>
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Enviar
        </button>
    </form>
    )
}