import React from 'react'
import { TabeData } from "./DashboardTableDummy"
import {CiMenuKebab} from 'react-icons/ci'
import ProfileImage from '../../../Images/ProfileImage.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { RiMoreLine } from 'react-icons/ri'
function DashboardTable() {
    return (
        <div>
            <table  className=' w-[80vw] border text-left mx-8 mt-8'>
                <tr className=' border-b-[1px] border-[#DFE4FF]'>
                    <th className=' px-8 py-5'>Name</th>
                    <th className='  px-8 py-5'>Incorporator</th>
                    <th className='  px-8 py-5'>Jurisdiction</th>
                    <th className='  px-8 py-5'>Industry</th>
                    <th className='  px-8 py-5'>Mailbox</th>
                    <th className='  px-8 py-5'>Last active on</th>
                </tr>
                {TabeData.map((data,index)=>{
                    return(
                        <tr className=' border-b-[1px] border-[#DFE4FF]' >
                            <td className=' px-8 py-5'><span className=' flex items-center gap-2'> <img src={ProfileImage} width={30} height={30} alt="Profile"/>{data.Name}</span></td>
                            <td className='  px-8 py-5'>{data.InCorporator}</td>
                            <td className='  px-8 py-5'>{data.Jurisdiction}</td>
                            <td className='  px-8 py-5'>{data.Industry}</td>
                            <td className='  px-8 py-5'>{data.Mailbox}</td>
                            <td className='  px-8 py-5'>{data.Last_active_on}</td>
                            <td className='  px-3 py-5'><CiMenuKebab/></td>
                        </tr>
                    )
                })}
            </table>
            <div className=' flex items-center justify-between mx-8 mt-2'>
                <div>
                    <h6>Showing 1 to <span><select className=' border'>
                        <option value="11">11</option>
                        </select></span> of 16 items</h6>
                </div>
                <div className=' flex items-center gap-3'>
                    <AiOutlineLeft/>
                     <p>Previous</p>
                     <p className=' px-2 py-1 bg-[#0F1738] text-white rounded-lg'>1</p>
                     <p>2</p>
                     <p>3</p>
                     <p>4</p>
                     <RiMoreLine/>
                     <p>16</p>
                     <p>Next</p>
                     <AiOutlineRight/>
                </div>
            </div>
        </div>
    )
}

export default DashboardTable
