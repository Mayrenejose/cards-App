import { useDispatch } from 'react-redux'
import { filterPriority, filterState, clearFilter } from '../../../redux/reducers'

export const Filters = () => {
    const dispatch = useDispatch()

    const handleEstadoChange = (e) => {
        const selectedState = e.target.value
        dispatch(filterState(selectedState))
    }
    
    const handlePrioridadChange = (e) => {
        const selectedPriority = e.target.value
        dispatch(filterPriority(selectedPriority))
    }

    const handleCleanData = () => {
        dispatch(clearFilter())
    }

    return (
        <div className="h-auto w-ful p-4 flex flex-row">
            <p className="text-2xl mr-12">Ordenar por:</p>

            <div className="flex mr-5">
                <select
                    className="shadow 
                    border rounded 
                    w-full py-2 px-3 
                    text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline"
                    id="estado"
                    name="stateticket"
                    onChange={handleEstadoChange}
                >
                    <option>Estado</option>
                    <option value="abierto">Abierto</option>
                    <option value="cerrado">Cerrado</option>
                </select>
            </div>

            <div className="flex mr-5">
                <select
                    className="shadow 
                    border rounded 
                    w-full 
                    py-2 px-3 
                    text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline"
                    id="prioridad"
                    name="priority"
                    onChange={handlePrioridadChange}
                >
                    <option>Prioridad</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>
            </div>

            <button className='bg-blue-500 
            hover:bg-blue-700 
            text-white 
            font-bold 
            py-2 px-4 
            rounded 
            flex 
            text-lg'
            onClick={handleCleanData}
            >
                Limpiar filtro
            </button>
        </div>
    )
}