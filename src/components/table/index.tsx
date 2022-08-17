import {useMediaQuery} from "react-responsive";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

const MarketTable = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 765px)'
    })
    if(isDesktopOrLaptop) return <DesktopTable/>
    return <MobileTable/>
}

export default MarketTable
