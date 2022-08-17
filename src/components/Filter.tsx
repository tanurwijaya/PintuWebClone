const DATA = ['Terbaru', 'DeFi', 'NFT/Gaming', 'CEX', 'DEX', 'Layer-1', 'Infrastructure', 'Lending', 'Layer-2', 'Ekosistem Stable Coin']
const Filter = () => {
    return(
        <div className='flex flex-row mb-4 overflow-x-scroll md:min-w-min'>
            {DATA.map((a)=><p className='min-w-fit text-clip overflow-hidden pt-2 pb-2 pl-3 pr-3 border bg-blue-100 rounded-md text-blue-700 font-bold text-xs mr-3 cursor-pointer max-h-8'>{a}</p>)}
        </div>
    )
}

export default Filter
