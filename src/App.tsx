import React from 'react';
import './App.css';
import Header from "./Header";
import Filter from "./Filter";
import TopMovers from "./TopMovers";

function App() {
    return (
        <div className="flex flex-1 pt-4 pb-4 pl-16 pr-16 flex-col">
            <Header/>
            <TopMovers/>
            <Filter/>
            <div className="border rounded-lg border-gray-300 w-full">
                <table className="table-auto w-full divide-y divide-gray-300">
                    <thead>
                    <tr className="whitespace-nowrap">
                        <th className="px-4 w-8"/>
                        <th className="text-left py-6 pr-4 text-neutral-400">CRYPTO</th>
                        <th className="text-left p-2 text-neutral-400"/>
                        <th className="text-left p-2 text-neutral-400">HARGA</th>
                        <th className="p-2 text-neutral-400">24 JAM</th>
                        <th className="p-2 text-neutral-400">1 MGG</th>
                        <th className="p-2 text-neutral-400">1 BLN</th>
                        <th className="p-2 text-neutral-400">1 THN</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap cursor-pointer">
                        <td className="px-4 w-8"><div className='w-8 h-8 bg-gray-300 rounded-full'/></td>
                        <td className='py-6 pr-4 font-bold'>Bitcoin</td>
                        <td className='p-2'>BTC</td>
                        <td className='p-2 font-bold'>Rp 335.000.000</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                    </tr>
                    <tr className="whitespace-nowrap cursor-pointer">
                        <td className="px-4 w-8"><div className='w-8 h-8 bg-gray-300 rounded-full'/></td>
                        <td className='py-6 pr-4 font-bold'>Bitcoin</td>
                        <td className='p-2'>ETH</td>
                        <td className='p-2 font-bold'>Rp 35.000.000</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                        <td className='p-2 text-center font-bold'>3.25%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
