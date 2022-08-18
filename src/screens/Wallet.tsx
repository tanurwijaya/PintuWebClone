import React from 'react';
import Header from "../components/Header";
import TopMovers from "../components/TopMovers";
import Filter from "../components/Filter";
import MarketTable from "../components/table";

const WalletScreen = () => {
    return (
        <div className="flex flex-1 pt-4 pb-4 lg:px-20 md:px-6 flex-col items-center max-w-full">
            <div className='max-w-full w-full md:px-0 px-4'>
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
