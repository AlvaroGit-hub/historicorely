import React from "react";
import { useState } from "react";
import Selected from "./Selected";
import Image from "./Image";

const Item = ({ id, model, ok, date, img, onChange, index, checked }) => {
    
  const [array, setArray] = useState(img)

  const url="http://192.168.0.52:9998/elements/thumbnail/"

  let arrayUrl=[]
  let imagenCenital="1"
  let imagenFrontal="1"
  if(img!==undefined){
    imagenCenital= array.cenital.id_image
    imagenFrontal= array.frontal.id_image
    arrayUrl=[url+imagenCenital,url+imagenFrontal]
   
    //console.log(imagenCenital ,imagenFrontal)
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
          <h2 className="pl-4">{id}</h2>
          <h2 className="pl-6">{model}</h2>
          <h2 className="pl-24">{ok}</h2>
          <h2 className="pl-12 float-right">{date}</h2>
        </div>
        {imagenCenital!=="1" && 
        <div className="flex flex-wrap">
          {
            arrayUrl.map((item)=>(
              <Image image={item} />
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


