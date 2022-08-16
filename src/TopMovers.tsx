import React from "react";

const DATA = ['Chiliz','Dogecoin', 'STEPN', 'Ethereum', 'Optimism', 'Filecoin']

const TopMovers = () => {
    return(
        <div className='mb-4'>
            <p className='text-xl font-bold'>🔥 Top Movers (24 Jam)</p>
            <div className='flex flex-6 flex-row mb-4'>
            {DATA.map((a)=>(
                <div className='flex-1 hover:bg-gray-100 p-5 cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='w-10 h-10 bg-blue-100 rounded-full  mr-2'/>
                        <p className='font-bold text-lg'>{a}</p>
                    </div>
                    <p className='text-sm mt-2'>Rp 3.108</p>
                    <div className='mt-2'>
                    <p className='font-bold text-lg'>16.75%</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TopMovers
