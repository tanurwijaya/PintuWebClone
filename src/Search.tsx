import React, { useState, useRef } from "react";

const POPULAR_LIST = ['Bitcoin', 'Ethereum', 'Tether', 'Binance Coin', 'Compound', 'Chainlink', 'Synthetix', 'Yearn.finance', 'Uniswap']
const Search = () => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const refInput = useRef<any>();
    return(
        <label className="">
            {isFocus ? (
                <div className='p-3 border rounded-lg bg-white border-gray-300 max-h-96 absolute right-16 overflow-y-hidden'>
                    <input
                        autoFocus
                        ref={refInput}
                        onFocus={()=>setFocus(true)}
                        onBlur={()=>setFocus(false)}
                        className="placeholder:text-slate-400 block bg-gray-100 w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm cursor-pointer"
                        placeholder="Cari aset di Pintu..." type="text" name="search"/>
                    <div className='mt-2 overflow-y-scroll'>
                    {POPULAR_LIST.map((item)=><p className='flex flex-1 p-2 hover:bg-gray-100 rounded-md mt-1 cursor-pointer'>{item}</p>)}
                    </div>
                </div>
            ) : <input
                onFocus={()=>{
                    setFocus(true)
                }}
                onBlur={()=>setFocus(false)}
                className="placeholder:text-slate-400 block bg-gray-100 w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm cursor-pointer"
                placeholder="Cari aset di Pintu..." type="text" name="search"/>}

        </label>
    )
}

export default Search
