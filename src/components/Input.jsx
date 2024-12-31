import React from 'react'
function Inputbox ({
    inputValue1 = "",
    inputValue2 = "",
    onInput1Change,
    onInput2Change,
    onSwap,
    currency1 = "USD",
    currency2 = "USD",
    oncurrency1Change,
    oncurrency2Change,
    currOptions1 = [],
    currOptions2 = [],
    onConvert,
    onClear
}   
){
    return (
        <div className='flex flex-col justify-center align-middle items-center min-h-screen'>
            <div className='border p-10 rounded-2xl bg-slate-800 '>
        <div className='flex gap-5'>
            <div className='flex flex-col'>
                <div className='text-white font-semibold'>From</div>
                <div className='flex '>
                <input type="number" className='h-10 rounded-l-lg focus:border-blue-600' value={inputValue1} onChange={onInput1Change} />
                <select name="" id="" className='rounded-r-lg bg-blue-100' value={currency1} onChange={oncurrency1Change}>
                {
                        currOptions1.map((options,index)=>{
                            return (
                               <option key={`${index}-${options}`}>
                                {options}
                               </option>
                            )
                        })
                }
                </select>
                </div>
            </div>
            <div className='flex justify-center items-end'>
            <button className='p-2 rounded-md bg-orange-700 hover:bg-orange-400 text-white font-semibold hover:text-black' onClick={onSwap}>Swap</button>
            </div>
            <div className='flex flex-col'>
                <div className='text-white font-semibold'>To</div>
                <div className='flex '>
                <input type="number" className='h-10 rounded-l-lg ' value={inputValue2} onChange={onInput2Change} />
                <select name="" id="" className='rounded-r-lg bg-blue-100' value={currency2} onChange={oncurrency2Change}>
                    {
                        currOptions2.map((options,index)=>{
                            return (
                               <option key={`${options}-${index}`}>
                                {options}
                               </option>
                            )
                        })
                    }
                </select>
            </div>
                </div>
        </div>
            <div className='flex my-4 justify-center gap-10'>
                <button className='p-3 rounded-md bg-orange-700 hover:bg-orange-400 text-white font-semibold hover:text-black' onClick={onConvert}>Convert</button>
                <button className='p-3 rounded-md bg-orange-700 hover:bg-orange-400 text-white font-semibold hover:text-black' onClick={onClear}>Clear Inputs</button>
            </div>
            </div>
        </div>
    )
}

export default Inputbox