import React, {useEffect} from "react";
import {thousandSeparator} from "../utils/strings";

const LatestPrice = ({latestPrice}: {latestPrice:string}) => {
    const parsedPrice = parseFloat(latestPrice);
    const prevPrice = React.useRef<number|undefined>();
    const [injectedClass, setInjectedClass] = React.useState<string|null>(null);
    useEffect(()=>{
        if(prevPrice.current && prevPrice.current !== parsedPrice){
            setInjectedClass(parsedPrice > prevPrice.current ? 'price-increase':'price-decrease')
        }
        prevPrice.current = parsedPrice
    },[latestPrice, parsedPrice])
    return(
        <td className={`font-bold ${injectedClass}`}>Rp {thousandSeparator(latestPrice)}</td>
    )
}

export default LatestPrice
