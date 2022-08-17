import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import WalletScreen from "./screens/Wallet";
import {MarketProvider} from "./context/MarketContext";

function App() {
    const queryClient = new QueryClient()
    return (
        <div className='max-w-full'>
            <QueryClientProvider client={queryClient}>
                <MarketProvider>
                    <WalletScreen/>
                </MarketProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App;
