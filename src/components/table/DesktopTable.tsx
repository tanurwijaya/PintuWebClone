import React from "react";
import {MarketDataInterface, useMarketContext} from "../../context/MarketContext";
import LatestPrice from "../LatestPrice";
import ChangePercentage from "../ChangePercentage";

export const CryptoListItem = ({data, className} : {data: MarketDataInterface, className?: string}) => {
    return(
        <tr className={`whitespace-nowrap items-center ${className}`}>
            <td className='py-6 pr-4 font-bold'>
                <a href={`market/${data.currencySymbol}`} className='flex flex-1 flex-row items-center'>
                    <img src={data.logo} alt={`${data.name} logo`} style={{ filter: ``}} className='w-8 h-8 mx-4'/>
                    <div className='flex flex-1 flex-row space-x flex-wrap'>
                        <p className='flex flex-1'>{data.name}</p>
                        <p className='w-10'>{data.currencySymbol}</p>
                    </div>
                </a>
            </td>
            <LatestPrice className={'py-6'} latestPrice={data.price.latestPrice}/>
            <ChangePercentage price={data.price.day}/>
            <ChangePercentage price={data.price.week}/>
            <ChangePercentage price={data.price.month}/>
            <ChangePercentage price={data.price.year}/>
        </tr>
    )
}
const DesktopTable = () => {
    const {marketData} = useMarketContext()
    return(
        <table className="table-auto w-full divide-y divide-gray-300">
            <thead>
            <tr className="whitespace-nowrap">
                <th className="text-left py-6 pr-4 text-neutral-400 pl-16">CRYPTO</th>
                <th className="text-left p-2 text-neutral-400">HARGA</th>
                <th className="p-2 text-neutral-400">24 JAM</th>
                <th className="p-2 text-neutral-400">1 MGG</th>
                <th className="p-2 text-neutral-400">1 BLN</th>
                <th className="p-2 text-neutral-400">1 THN</th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {
                marketData.map((data)=> <CryptoListItem data={data}/>)
            }
            </tbody>
        </table>
    )
}

export default DesktopTable
