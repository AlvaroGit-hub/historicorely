import React from 'react';
import { useState } from 'react'
import Selected from './Selected';

const Item = ({id,model,ok,date,img,onChange,index,checked}) => {


    
    return(
        <div>
            <div className='bg-white border-black rounded-md flex py-0 px-2.5 my-0.5 mx-2.5 justify-between'>
                    <div className='flex items-center pr-2 text-xs'>

                    <label
                         className="mb-2 cursor-pointer"
                         htmlFor={id}
                         key={index}
                    >
                    <input
                        type="checkbox"
                        //id={index + 1}
                        onChange={onChange}
                        checked={checked}    
                     />
                    </label>


                        <h2 className='pl-4'>{id}</h2>
                        <h2 className='pl-6'>{model}</h2>
                        <h2 className='pl-24'>{ok}</h2>
                        <h2 className='pl-12 float-right'>{date}</h2>
                    </div>
                    <div className='flex flex-wrap'>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain  rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            
                    </div>
                    <div className='flex flex-wrap '>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src={img}  className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src="./images/city-street-1.jpg" className='rounded-sm mt-3'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src="./images/city-street-1.jpg" className='rounded-sm mt-3'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src="./images/city-street-1.jpg" className='rounded-sm mt-3'/>
                            </div>
                            <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>  
                                <img src={img} className='object-contain rounded-sm'/>
                            </div>
                    </div>
                    <button>...</button>      
                 </div>
                 {/* {checks ? <Selected/> : ""} */}
        </div>
    )
}

export default Item





 
// background-color: gray;
// border-radius: 5px;
// width: 70px;
// height: 50px;
// border: 1px solid #000;
// margin: 2px 2px;