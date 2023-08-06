import React from 'react'
import { AiOutlineClose, AiOutlineStop } from 'react-icons/ai';
import CollapsedRoles from '../Collapsed/CollapsedRoles';
 import ProfileImage from '../../Images/ProfileImage.png'
function Drawer() {
  function toggleDrawer() {
    const drawer = document.getElementById('drawer') as HTMLElement;
    const isOpen = drawer.style.right === '0px';

    if (isOpen) {
      drawer.style.right = '-100vw';
    } else {
      drawer.style.right = '0';
    }
  }
  return (
    <div>
      <div id='drawer' className="z-50 fixed top-0 right-[-100vw] w-[100vw] backdrop-blur-sm bg-white/20 transition-all ease-in-out delay-150 bg-opacity-50 ">
        <div className=" w-[65vw] h-[100vh] float-right bg-white p-7 border-l-[1px] ">
          <>
            <div className=' flex justify-between items-center'>
              <div className=' flex items-center gap-4'>
               <img src={ProfileImage} width={50} height={50} alt="Profile"/>
              <h5 className=' font-semibold text-2xl'>Jacob Jones</h5>
                <div className=' flex items-center gap-2 border border-red-600 text-red-600 px-2 py-1 rounded'>
                  <AiOutlineStop />
                  <p>Deactivate User</p>
                </div>
              </div>
              <AiOutlineClose className=' text-2xl cursor-pointer'  onClick={()=>toggleDrawer()}/>
            </div>
            <p className=' max-w-lg mt-3'>Manage all user settings here. Changes made here will reflect in the user settings and what they access. </p>
            <div className='flex gap-2 border-b-[1px] border-[#DFE4FF] mt-4' >
              <h6 className=' text-[#6A6A6D] p-2' >General settings</h6>
              <h6 className=' p-2 border-b-2 border-[#0F1738]'>Roles and Permissions</h6>
              <h6 className='  p-2 text-[#6A6A6D]'>Assigned Companies</h6>
            </div>
            <div className=' divide-y divide-[#DFE4FF] '/>
            <div className=' flex justify-between items-center mt-2'>
              <h5 className=' text-xl font-semibold'>Manage permissions</h5>
              <a href='#about' className=' underline text-blue-600'>Reset to role default</a>
            </div>
            <div>
              <CollapsedRoles/>
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Drawer
