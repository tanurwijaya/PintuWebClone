const DATA = ['Terbaru', 'DeFi', 'NFT/Gaming', 'CEX', 'DEX', 'Layer-1', 'Infrastructure', 'Lending']
const Filter = () => {
    return(
        <div className='flex flex-row mb-4'>
            {DATA.map((a)=><p className='pt-2 pb-2 pl-3 pr-3 border bg-blue-100 rounded-md text-blue-700 font-bold text-xs mr-3 cursor-pointer'>{a}</p>)}
        </div>
    )
}

export default Filter
