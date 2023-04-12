import React from "react";
import { useState } from "react";
import Selected from "./Selected";
import Image from "./Image";

const Item = ({id, model, ok, date, img, onChange, index, checked }) => {
  
  const url="http://192.168.0.52:9998/elements/thumbnail/"
  let urlImgArray=[]

  if(img!==undefined){
    /*Obtenemos el valor de los elementos dentro de views en este caso cenital y frontal*/
    const result = Object.values(img); 
    /*Agregamos al array las url de la imagenes */
    urlImgArray= result.map((e)=> url+e.id_image)
  }

//http://192.168.0.52:9998/elements/thumbnail/64351c8d315999ab921820c3
//http://localhost:9999/elements/image/64351c8d315999ab921820c8

  return (
    
    <div>
      <div className="bg-white border-black rounded-md flex py-0 px-2.5 my-0.5 mx-2.5 justify-between">
        <div className="flex items-center pr-2 text-xs">
          <label className="mb-2 cursor-pointer" htmlFor={id} key={index}>
            <input
              type="checkbox"
              onChange={onChange}
              checked={checked}
            />
          </label>
          {/* <h2 className="pl-4">{id}</h2> */}
          <h2 className="pl-6">{model}</h2>
          <h2 className="pl-24">{ok}</h2>
          <h2 className="pl-12 float-right">{date}</h2>
        </div>
        {urlImgArray.length>0 && 
        <div className="flex flex-wrap">
          {
            urlImgArray.map((item)=>(
              <Image image={item} key={item}/>
            ))
          }
          
        </div>}

        <div className="flex flex-wrap ">
          <Image image={img} />
          <Image image={img} />
          
        </div>
        <button>...</button>
      </div>
      {/* {checks ? <Selected/> : ""} */}
    </div>
  );
};

export default Item;


