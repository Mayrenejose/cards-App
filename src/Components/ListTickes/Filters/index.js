import { useDispatch } from 'react-redux'
import { filterPriority, filterState, clearFilter, filterType } from '../../../redux/reducers'

export const Filters = () => {
    const dispatch = useDispatch()

    const handleChange = (e, filterName) => {
        const selectedValue = e.target.value
        switch (filterName) {
            case 'estado':
                dispatch(filterState(selectedValue))
                break
            case 'prioridad':
                dispatch(filterPriority(selectedValue))
                break
            case 'type':
                dispatch(filterType(selectedValue))
                break
            default:
                break
        }
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
                    onChange={(e) => handleChange(e, 'estado')}
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
                    onChange={(e) => handleChange(e, 'prioridad')}
                >
                    <option>Prioridad</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
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
                    onChange={(e) => handleChange(e, 'type')}
                >
                    <option>Tipo</option>
                    <option value="tecnico">Técnico</option>
                    <option value="funcional">Funcional</option>
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
