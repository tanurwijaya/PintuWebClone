import { useQuery } from '@tanstack/react-query'
import {SUPPORTED_CURRENCIES_API} from "../configs/apis";

interface SupportedCurrenciesResponse {
    "code": string,
    "message": string,
    payload: SupportedCurrenciesPayload[],
}

interface SupportedCurrenciesPayload {
    "currencyGroup": string,
    "color": string,
    "currencySymbol": string,
    "name": string,
    "logo": string,
    "decimal_point": number,
    "listingDate": string,
    "wallets": SupportedCurrenciesWalletI[]
}

interface SupportedCurrenciesWalletI {
    "currencyGroup": string,
    "tokenSymbol": string,
    "decimal_point": number,
    "tokenType": string,
    "blockchain": string,
    "explorer": string,
    "listingDate": string,
    "blockchainName": string,
    "logo": string
}

const fetchSupportedCurrencies = async (): Promise<SupportedCurrenciesResponse> => {
    const {code, message,payload} = await fetch(SUPPORTED_CURRENCIES_API).then(res =>
        res.json()
    )
    // remove idr (index 0)
    payload?.shift()
    return {code, message, payload};
}

export const useSupportedCurrencies = () => {
    const context = useQuery(['supportedCurrencies'], fetchSupportedCurrencies);
    const data = context.data?.payload
    return { ...context, data: data ?? [] };
};
