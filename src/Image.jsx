import React from 'react';

export default function Image(props){
    return(
        <div className='bg-gray-400 rounded-md  m-0.5 border-2 border-solid'>
            <img src={props.image} className='rounded-sm m-1 w-[120px] h-[100px]' />
        </div>
       
    )
}