import React from "react";
import Search from "./Search";

const Header = () => {
    return (
        <div className='flex flex-1 flex-row mt-4 mb-6 w-full items-center'>
            <p className='flex-1 font-bold md:text-3xl text-xl mr-2'>Harga Crypto dalam Rupiah Hari Ini</p>
            <Search/>
        </div>
    )
}

export default Header
