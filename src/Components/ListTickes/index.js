import { useDispatch, useSelector } from 'react-redux'
import { removeTicket } from '../../redux/reducers'
import { SlTrash, SlPencil } from "react-icons/sl"
import { Filters } from './Filters'

export const ListTickets = () => {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.ticket)

  const handleRemoveTicket = id => {
    dispatch(removeTicket(id))
  }

  return (
    <div className='flex flex-col items-center'>
        <Filters/>
        {tickets.map(ticket => (
            <div key={ticket.id} 
              className='w-11/12 my-4 min-h-min
              shadow-lg
              bg-slate-100
              rounded-xl
              flex
              justify-between
              p-5'
            >
                <div>
                  <p className='text-2xl font-bold'>{ticket.title}</p>
                  <p>{ticket.date}</p>
                  <p>{ticket.description}</p>
                  <p>Tipo: {ticket.type}</p>
                  <p>Prioridad: {ticket.priority}</p>
                  <p>Estado: {ticket.stateticket}</p>
                </div>
                <div className='flex flex-col justify-evenly'>
                  <button onClick={() => handleRemoveTicket(ticket.id)}><SlTrash /></button>
                  <button><SlPencil /></button>
                </div>
            </div>
        ))} 
    </div>
  )
}