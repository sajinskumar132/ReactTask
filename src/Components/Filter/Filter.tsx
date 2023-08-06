import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci';
function Filter() {
    const DropdownVisibility=(Visbility:boolean)=>{
        const dropdown = document.getElementById('dropdown') as HTMLElement;
        if(Visbility){
            dropdown.style.display = 'block';
         }else{
            dropdown.style.display = 'none';
         }
        }
        
    return (
        <div className=' mx-8 my-4'>
            <div className=' flex justify-between '>
                <div className=' flex items-center gap-4'>
                    <div className=' border rounded'>
                        <select className=' px-4 py-2' >
                            <option>Jurisdiction</option>
                        </select>
                    </div>
                    <div className=' border rounded'>
                        <select className=' px-4 py-2' >
                            <option>Legal Form</option>
                            <option>Sole establishment</option>
                            <option>Civil company</option>
                        </select>
                    </div>
                    <div className=' border rounded'>
                        <select className=' px-4 py-2'>
                            <option>Plans</option>
                        </select>
                    </div>
                    <div>
                        <h5><span className=' px-1 text-sm bg-red-600 text-white rounded-full'>+</span> Add more</h5>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div className="flex items-center rounded-lg border bg-white px-2">
                           <CiSearch/>
                            <input type="text" id="custom-search" className="w-64 px-4 py-2 text-gray-700 leading-tight focus:outline-none" placeholder="Search..." 
                            onClick={()=>{DropdownVisibility(true)}} onBlur={()=>{DropdownVisibility(false)}}
                            /> 
                        </div>
                        <div id="dropdown" className="absolute top-12 left-0 bg-white border rounded-lg shadow-md hidden w-72">
                            <ul>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Option 1</li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Option 2</li>
                                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Option 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex gap-2 items-center mt-4'>
                <div className=' flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>LLC</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>Sole Proprietorship</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>Freezone</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>Mainland</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>Freezone</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>B2B</h5>
                    <AiOutlineClose />
                </div>
                <div className='flex items-center px-2 py-1 bg-[#E5E9FF] rounded-full gap-2'>
                    <h5>B2C</h5>
                    <AiOutlineClose />
                </div>
                <div>
                    <a href='#about' className=' text-blue-600 underline'>Clear all</a>
                </div>
            </div>
        </div>

    )
}

export default Filter
