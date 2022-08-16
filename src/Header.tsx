import React from "react";
import Search from "./Search";

const Header = () => {
    return (
        <div className='flex flex-row mt-4 mb-10'>
            <p className='flex-1 text-3xl font-bold'>Harga Crypto dalam Rupiah Hari Ini</p>
            <Search/>
        </div>
    )
}

export default Header
