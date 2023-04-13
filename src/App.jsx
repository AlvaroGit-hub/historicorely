import React, { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
//import data from "./elements.json";
import Selected from "./Selected";
import { dateTimeToString } from "./helpers";

export default function App() {
  
  const [data, setData] = useState([]);
  React.useEffect(function () {
    //http://192.168.0.52:9998/elements/filter/?sort_field=timestamp&sort=-1&limit=20&skip=0
    //http://192.168.0.52:9998/elements/filter/?sort_field=timestamp&sort=-1&limit=1&skip=0
    fetch(`http://192.168.0.52:9998/elements/filter/?sort_field=timestamp&sort=-1&limit=20&skip=0`)
      .then((res) => res.json())
      .then((dataf) => setData(dataf));
  },[]);

 
  //Estado de los check de  items
  const [selectedItem, setSelectedItem] = useState(
    new Array(Item.length).fill(false)
  );

  //Estado del check principal
  const [selectAll, setSelectAll] = useState(false);
  
  //Estado del contador
  const [counterCheck, setCounterCheck] = useState(0);

  /**
   * Funcion que controla la seleccion de todos los items
   */
  const handleCheckAll = () => {
    setSelectAll(!selectAll); 
    const updatedCheckedState = data.map((item) => (item.checked = !selectAll));
    setSelectedItem(updatedCheckedState);
    countCheck(updatedCheckedState); //Llamamos a la funcion contador
  };

  /**
   * Funcion que controla la seleccion cada item
   * @param {*} position 
   */
  const handleOnChange = (position) => {
    const updatedCheckedState = selectedItem.map((item, index) =>
      index === position ? !item : item
    );
    setSelectedItem(updatedCheckedState);
    countCheck(updatedCheckedState); //Llamamos a la funcion contador
  };

  /**
   * Funcion que se encarga de contar los check en true
   * @param {*} updatedCheckedState 
   */
  function countCheck(updatedCheckedState) {
    const totalCount = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + 1;
        }
        return sum;
      },
      0
    );

    setCounterCheck(totalCount);
    //Si no hay items seleccionados cambiamos a false el check principal
    if (totalCount === 0) {
      setSelectAll(false);
    }
  }

  return (
    <div className="bg-gray-400 text-center p-2  min-w-[650px]">
      <header className="p-20">
        <h1>Histórico</h1>
      </header>
      {/* // <div className="flex text-xs px-2.5 my-0.5 mx-2.5"></div> */}
      <div className="flex text-xs flex px-2.5 my-0.5 mx-2.5 min-w-[650px]">
        <input onChange={handleCheckAll} type="checkbox" checked={selectAll} />
        <h2 className="pl-1 pr-1 ml-0">ID</h2>
        <h2 className="pl-5 ml-[00px]">NOMBRE</h2>
        <h2 className="pl-20">ESTADO</h2>
        <h2 className="pl-20 pr-3">FECHA</h2>
        <h2 className="pl-[30%] pr-3">MUESTRAS</h2>
        {/* <h2 className="pl-16">DETECCIONES</h2> */}
      </div>
      {data.map((item, index) => (
        <Item
          key={`${item.id_element}${item.index}`}
          id={item.id_element}
          index={index}
          model={item.model}
          ok={item.ok}
          date={dateTimeToString(item.timestamp)}
          img={item.views}
          checked={selectedItem[index]}
          onChange={() => handleOnChange(index)}
        />
        
      ))}
      <Selected num={counterCheck} />
    </div>
  );
}
