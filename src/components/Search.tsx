import React, {useState, useRef} from "react";
import {useMarketContext} from "../context/MarketContext";
import {useMediaQuery} from "react-responsive";

const Search = () => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const [filterInput, setFilterInput] = useState<string>('');
    const refInput = useRef<any>();
    const {marketData} = useMarketContext()
    const listData = marketData.filter((data) => data.name.toLowerCase().includes(filterInput.toLowerCase()))
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 765px)'
    })

    if(!isDesktopOrLaptop) return null
    return (
        <label className="">
            {isFocus ? (
                <div
                    className='pt-3 px-3 border rounded-lg bg-white border-gray-300 max-h-96 absolute right-16 overflow-y-hidden'>
                    <input
                        onChange={(event) => setFilterInput(event.target.value)}
                        autoFocus
                        ref={refInput}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        className="placeholder:text-slate-400 block bg-gray-100 w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm cursor-pointer"
                        placeholder="Cari aset di Pintu..." type="text" name="search"/>
                    <div className='mt-2 overflow-y-scroll max-h-52'>
                        {listData.map((item) => (
                            <div className='flex flex-1 p-2 hover:bg-gray-100 rounded-md mt-1 cursor-pointer'>
                                <div className='flex flex-1 space-x'>
                                    <p className='flex flex-1'>{item.name}</p>
                                    <p>{item.currencySymbol}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : <input
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => setFocus(false)}
                className="placeholder:text-slate-400 block bg-gray-100 w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm cursor-pointer"
                placeholder="Cari aset di Pintu..." type="text" name="search"/>}

        </label>
    )
}

export default Search
