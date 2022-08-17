import {useMarketContext} from "../../context/MarketContext";
import React, {useState} from "react";
import LatestPrice from "../LatestPrice";
import ChangePercentage from "../ChangePercentage";

type DurationFilterType = 'day' | 'week' | 'month' | 'year'
const MobileTable = () => {
    const {marketData} = useMarketContext()
    const [durationFilter, setDurationFilter] = useState<DurationFilterType>('day');
    return(
        <div>
            <div className='flex-1 space-x flex flex-row py-5 border-t-2 border-b-2 border-slate-100'>
                <p className='flex flex-1 font-bold text-xs'>CRYPTO</p>
                <select id='duration' onChange={(event)=>setDurationFilter(event.target.value as DurationFilterType)} className='font-bold border border-gray-300 text-gray-900 text-xs pl-1 py-1 rounded-md'>
                    <option value='day'>24 JAM</option>
                    <option value='week'>1 MGG</option>
                    <option value='month'>1 BLN</option>
                    <option value='year'>1 THN</option>
                </select>
            </div>
            {marketData.map((data)=>{
                return(
                    <div className='flex flex-1 py-4 items-center border-b-2 border-slate-100'>
                        <div className='flex flex-1 items-center'>
                            <img src={data.logo} alt={`${data.name} logo`} className='w-8 h-8 mr-6'/>
                            <div>
                                <p className='font-bold'>{data.name}</p>
                                <p className='text-slate-400 text-sm'>{data.currencySymbol}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <LatestPrice latestPrice={data.price.latestPrice}/>
                            <ChangePercentage price={data.price[durationFilter]}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MobileTable
