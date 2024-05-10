import { useState } from 'react'
import { FormAddTicket } from './FormAddTicket'
import { FormUpdateTicket } from './FormUpdateTicket'

export const AddTicket = ({openFormUpdate, idUpdate}) => {
  const [openForm, setOpenForm] = useState(false)

  return (
    <div className='w-80 
        shadow-xl 
        bg-white 
        flex 
        flex-col 
        min-h-screen 
        items-center
        p-4'
    >
      {!openFormUpdate && (
        <button className='bg-blue-500 
          hover:bg-blue-700 
          text-white 
          font-bold 
          py-2 px-4 
          rounded 
          flex 
          text-3xl'
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? 'Cerrar' : 'Agregar Ticket'}
        </button>
      )}

        {openForm && ( <FormAddTicket setOpenForm={setOpenForm}/>)}
        {openFormUpdate && <FormUpdateTicket idUpdate={idUpdate}/>}
    </div>
  )
}