import { ListTickets } from './ListTickes'
import { AddTicket } from './AddTicket'

function App() {
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
