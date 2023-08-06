import React from 'react'
import { AiOutlineMenuFold, AiOutlineSetting } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import { RxDashboard } from 'react-icons/rx'
import { BsBuildings } from 'react-icons/bs'
import { BiHelpCircle, BiTask } from 'react-icons/bi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { MdOutlineNotifications } from 'react-icons/md'
import ProfileImage from '../../../../Images/ProfileImage.png'
import { CiMenuKebab } from 'react-icons/ci'
function SubComponant1() {
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
        <div className='bg-[#0F1738] text-white flex flex-col justify-between p-6 h-[100vh]'>
            <div>
                <div className=' flex justify-between items-center'>
                    <div className=' flex items-center gap-3'>
                        <CgMenuGridO />
                        <h5 className=' font-bold text-xl'>Ynex</h5>
                    </div>
                    <div>
                        <AiOutlineMenuFold />
                    </div>
                </div>
                <div className=' mt-10'>
                    <div className=' p-2 flex gap-3 items-center'>
                        <RxDashboard />
                        <h5>Dashboard</h5>
                    </div>
                    <div className=' p-2 flex gap-3 items-center'>
                        <AiOutlineSetting />
                        <h5>New registrations</h5>
                    </div>
                    <div className=' p-2 flex gap-3 items-center  bg-[#F6F8FF] bg-opacity-10 rounded-lg'>
                        <BsBuildings />
                        <h5 >Companies</h5>
                    </div >
                    <div className=' p-2 flex gap-3 items-center'>
                        <BiTask />
                        <h5>Tasks and requests</h5>
                    </div>
                    <div className=' p-2 flex gap-3 items-center'>
                        <IoNewspaperOutline />
                        <h5>Billing</h5>
                    </div>
                    <div className=' p-2 flex gap-3 items-center'>
                        <HiOutlineDocumentReport />
                        <h5>Reporting and analytics</h5>
                    </div>

                </div>
            </div>

            <div>
                <div className=' flex gap-3 items-center p-2 '>
                    <MdOutlineNotifications />
                    <h5>Notifications</h5>
                </div>
                <div className=' flex gap-3 items-center p-2'>
                    <BiHelpCircle />
                    <h5>Help Center</h5>
                </div>
                <div className=' p-2 flex gap-2 items-center cursor-pointer' onClick={() => { toggleDrawer() }}>
                    <div>
                     <img src={ProfileImage} width={30} height={30} alt="Profile"/>
                    </div>
                    <div>
                        <h5>Jacob Jones</h5>
                        <p>JacobJones@gmail.com</p>
                    </div>
                    <div>
                        <CiMenuKebab/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubComponant1
