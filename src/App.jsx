import React, { useEffect } from 'react'
import { useState } from 'react'
import Item from './Item'
import data from './elements.json'
import Selected from './Selected'
import { dateTimeToString } from './helpers'


export default function App(){

  const [selectedItems,setSelectedItems] = useState(data.map((item) => ({isChecked: false , id: item.id})))
  const [selectId,setSelectID]= useState(false)
  const [count,setCount] = useState(0)
  //console.log(selectedItems)

  const handleCambioTodos = () => {

    setSelectID((prev) => !prev)

    selectId.isChecked == true ? selectedItems.isChecked = selectId : selectedItems.isChecked = !selectId

    
  }
  const handleCambio = (index) => {
    
    //setSelectedItems(selectedItems.splice(index,1,{isChecked: !selectedItems[index].isChecked , ...selectedItems[index]}))
    setSelectedItems(selectedItems.filter(() => {!selectedItems[index].isChecked}))

    
  }
  
  function totalChecks() {
    var contador = 0;
    selectedItems.map((item, i) => {
      if (item.isChecked) {
        contador++;
      }
    });
    return {
      contador
    };
  }

  useEffect(() => {
    setCount(totalChecks().contador);
    
  }, [selectedItems]);

 
  
  return (
    <div className='bg-gray-400 text-center w-full p-2 h-full'>
      <header className='p-20'>
        <h1>Histórico</h1>
      </header>
      <div className='flex sitems-center pr-2 text-xs py-0 px-2.5 my-0.5 mx-2.5'>
          <input onChange={handleCambioTodos} type="checkbox" checked={selectId}/>
          <h2 className='pl-4 pr-1'>ID</h2>
          <h2 className='pl-12'>NOMBRE</h2>
          <h2 className='pl-24'>ESTADO</h2>
          <h2 className='pl-8 pr-3'>FECHA</h2>
          <h2 className='pl-16 pr-3'>MUESTRAS</h2>
          <h2 className='pl-16'>DETECCIONES</h2>
      </div>
      {selectedItems && data.map((item, index) =>
        <Item
          key={item.id}
          id={item.id}
          index={index}
          model={item.model}
          ok={item.ok}
          date= {dateTimeToString(item.timestamp)}
          img={item.img}
          checked={selectedItems.isChecked}
          onChange={() => handleCambio(index)}
          
        />
      )
      }

      
        <Selected  
        num ={count} />

    </div>
  )
}

