import { useState } from 'react'
import { ListTickets } from './ListTickes'
import { AddTicket } from './AddTicket'

function App() {
  const [openFormUpdate, setOpenFormUpdate] = useState(false)
  const [idUpdate, setIdUpdate] = useState('')

  return (
    <div>
      <div className='flex'>
        <div className='h-full'>
          <AddTicket openFormUpdate={openFormUpdate} idUpdate={idUpdate}/>
        </div>

      <div className='w-3/4'>
        <ListTickets 
          setOpenFormUpdate={setOpenFormUpdate} 
          openFormUpdate={openFormUpdate}
          setIdUpdate={setIdUpdate}
        />
      </div>
      </div>
    </div>
  )
}

export default App