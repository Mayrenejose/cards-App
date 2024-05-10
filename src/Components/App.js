import { useDispatch, useSelector } from 'react-redux'
import { addTicket, removeTicket } from '../redux/reducers'
import { ListTickets } from './ListTickes'
import { AddTicket } from './AddTicket'


function App() {
  // const dispatch = useDispatch()
  // const tickets = useSelector((state) => state.ticket)
  // console.log(tickets);

  // const handleAddTicket = () => {
  //   dispatch(addTicket({ 
  //     id: id , 
  //     title: 'Ticket 3', 
  //     description: 'Descripción del nuevo ticket', 
  //     type: 'tecnico',
  //     date: Date.now(),
  //     priority: 'alta',
  //     stateticket: 'cerrad0'
  //   }))
  // }

  // const handleRemoveTicket = id => {
  //   dispatch(removeTicket(id))
  // }

  return (
    <div>
      <div className='flex'>
        <div className='h-full'>
          <AddTicket />
        </div>

      <div className='w-3/4'>
        <ListTickets/>
      </div>
      </div>
    </div>
  )
}

export default App
