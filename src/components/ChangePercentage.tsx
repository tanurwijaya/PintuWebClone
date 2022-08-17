import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";
import React from "react";

const ChangePercentage = ({price}: {price: string}) => {
    const parsedPrice = parseFloat(price)
    if(parsedPrice < 0){
        return(
            <td className='text-center font-bold'>
                <div className=' items-center justify-center flex flex-column'>
                    <ChevronDownIcon className='w-5 h-5 text-red-500'/>
                    <p className='text-red-500'>{price.replace('-','')}%</p>
                </div>
            </td>
        )
    }else if(parsedPrice > 0){
        return(
            <td className='text-center font-bold'>
                <div className=' items-center justify-center flex flex-column'>
                    <ChevronUpIcon className='w-5 h-5 text-green-500'/>
                    <p className='text-green-500'>{price}%</p>
                </div>
            </td>
        )
    }else{
        return <td className='text-center font-bold'>{price}%</td>
    }
}

export default ChangePercentage
