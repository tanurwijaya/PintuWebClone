import React, {createContext, useState, useEffect, useContext} from 'react'
import {useSupportedCurrencies} from '../hooks/useSupportedCurrencies'
import {usePriceChanges} from '../hooks/usePriceChanges'

interface MarketContextInterface {
    isLoading: boolean,
    marketData: MarketDataInterface[],
}

interface MarketDataInterface {
    name: string,
    currencySymbol: string,
    price: PriceInterface,
    logo: string,
    color: string,
}

interface PriceInterface {
    day:string,
    latestPrice: string,
    "week": string,
    "month": string,
    "year": string
}

// create context
const MarketContext = createContext<MarketContextInterface>({
    isLoading: false,
    marketData: [],
})


export const MarketProvider = ({children}: { children : JSX.Element}) => {
    const [marketData, setMarketData] = useState<any>([])

    const {isLoading: isCurrenciesLoading, data: currenciesData} = useSupportedCurrencies()
    const {
        isRefetching,
        isLoading: isPriceChangesLoading,
        data: priceChangesData
    } = usePriceChanges()
    useEffect(() => {
        if (!isPriceChangesLoading && !isCurrenciesLoading && isRefetching) {
            const mappedData = currenciesData.map((data) => {
                return {...data, price: priceChangesData[`${data.currencySymbol.toLowerCase()}/idr`]}
            })
            setMarketData(mappedData)
        }
    }, [isPriceChangesLoading, isCurrenciesLoading, isRefetching, currenciesData, priceChangesData])

    return (
        <MarketContext.Provider value={{isLoading: isCurrenciesLoading, marketData}}>
            {children}
        </MarketContext.Provider>
    )
}

export const useMarketContext = () => useContext(MarketContext)

