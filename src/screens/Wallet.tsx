import React from 'react';
import Header from "../components/Header";
import TopMovers from "../components/TopMovers";
import Filter from "../components/Filter";
import MarketTable from "../components/table";

const WalletScreen = () => {
    return (
        <div className="flex flex-1 pt-4 pb-4 px-4 flex-col items-center max-w-full">
            <div className='max-w-full w-full'>
                <Header/>
                <TopMovers/>
                <Filter/>
            </div>
            <div className="md:border rounded-lg w-full max-w-full">
                <MarketTable/>
            </div>
        </div>
    );
}

export default WalletScreen
