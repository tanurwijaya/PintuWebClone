import {useQuery} from '@tanstack/react-query'
import {PRICE_CHANGES_API} from "../configs/apis";

interface PriceChangeResponse {
    "code": string,
    "message": string,
    payload: PriceChangePayload[],
}

interface PriceChangePayload {
    "pair": string,
    "latestPrice": string,
    "day": string,
    "week": string,
    "month": string,
    "year": string
}

const fetchPriceChanges = (): Promise<PriceChangeResponse> => fetch(PRICE_CHANGES_API).then(res =>
    res.json()
)

export const usePriceChanges = () => {
    const context = useQuery(['priceChanges'], fetchPriceChanges, {refetchInterval: 3000});
    let data: Record<string, PriceChangePayload> = {}
    if (Array.isArray(context.data?.payload)) {
        context.data?.payload.forEach((item) => {
            data[item.pair] = item
        })
    }
    return {...context, data: data};
};
