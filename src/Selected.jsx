import React from 'react';



const Selected = ({num}) =>{


    
    return(
        <div className='fixed -bottom-1 border-2 flex justify-between bg-white rounded-t-md w-full h-12 items-center p-2 text-xs'>
            <h2>{num} Elementos seleccionados</h2>
            <h2>Deselecionar todos</h2>
            <h2> Ver detalles</h2>
            <h2> Descargar imágenes</h2>
            <h2>Descargar csv</h2>
            <h2>Borrar del histórico</h2>
        </div>
    )
}



export default Selected