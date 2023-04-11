import React from 'react';

export default function Image(props){
    return(
        <div className='bg-gray-400 rounded-md w-16 h-16 m-0.5 border-2 border-solid'>
            <img src={props.image} className='rounded-sm mt-3'/>
        </div>
       
    )
}