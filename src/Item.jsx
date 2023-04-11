import React from "react";
import { useState } from "react";
import Selected from "./Selected";
import Image from "./Image";

const Item = ({ id, model, ok, date, img, onChange, index, checked }) => {
  return (
    <div>
      <div className="bg-white border-black rounded-md flex py-0 px-2.5 my-0.5 mx-2.5 justify-between">
        <div className="flex items-center pr-2 text-xs">
          <label className="mb-2 cursor-pointer" htmlFor={id} key={index}>
            <input
              type="checkbox"
              //id={index + 1}
              onChange={onChange}
              checked={checked}
            />
          </label>
          <h2 className="pl-4">{id}</h2>
          <h2 className="pl-6">{model}</h2>
          <h2 className="pl-24">{ok}</h2>
          <h2 className="pl-12 float-right">{date}</h2>
        </div>
        <div className="flex flex-wrap">
          <Image image={img} />
          <Image image={img} />
        </div>

        <div className="flex flex-wrap ">
          <Image image={img} />
          <Image image={img} />
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

// background-color: gray;
// border-radius: 5px;
// width: 70px;
// height: 50px;
// border: 1px solid #000;
// margin: 2px 2px;
