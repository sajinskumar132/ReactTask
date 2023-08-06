import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
function CollapsedRoles() {
    const Collapsed = (HeaderClassId: string, ContentClassId: string) => {
        const Header = document.getElementById(HeaderClassId) as HTMLElement
        const Content = document.getElementById(ContentClassId) as HTMLElement
        const ArrowForward: any = Header.querySelector('#ArrowForward');
        const ArrowDown: any = Header.querySelector('#ArrowDown');
        Content.style.display = Content.style.display === 'none' ? 'block' : 'none';
        if (Content.style.display === 'none') {
            ArrowForward.style.display = 'block'
            ArrowDown.style.display = 'none'
        } else {
            ArrowForward.style.display = 'none'
            ArrowDown.style.display = 'block'
        }
    }
    return (
        <div>
            <div id="collapsible" className=' mt-3 overflow-y-auto'>
                <div id={`collapsible-header${1}`} className=' p-3 bg-[#ECEFFF] rounded-lg ' onClick={() => {
                    Collapsed(`collapsible-header${1}`, `collapsible-content${1}`)
                }}>
                    <div className=' flex justify-between items-center' >
                        <div className=' flex items-center' >
                            <IoIosArrowForward id="ArrowForward" className=" cursor-pointer" />
                            <IoIosArrowDown id="ArrowDown" style={{ display: 'none' }} className=" cursor-pointer" />
                            <h5 className=" font-semibold">Dashboard</h5>
                        </div>
                        <input type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                        <p>-</p>
                    </div>
                </div>
                <div id={`collapsible-content${1}`} style={{ display: 'none' }} className=' ml-10'>
                    <div id={`collapsible-header${2}`} className=' p-3' onClick={() => {
                        Collapsed(`collapsible-header${2}`, `collapsible-content${2}`)
                    }}>
                        <div className=' flex justify-between' >
                            <div className=' flex items-center' >
                                <IoIosArrowForward id="ArrowForward" className=" cursor-pointer"  />
                                <IoIosArrowDown id="ArrowDown" style={{ display: 'none' }} className=" cursor-pointer"  />
                                <h5>Chart</h5>
                            </div>
                            <input type="checkbox" defaultChecked />
                            <input type="checkbox" defaultChecked />
                            <p>-</p>
                        </div>
                    </div>
                    <div id={`collapsible-content${2}`} style={{ display: 'none' }}>
                        <div className=' flex justify-between p-3 bg-[#ECEFFF] rounded-lg'>
                            <h5 className=' pl-5'>Revenue</h5>
                            <input className=' ml-[-25px]' type="checkbox" defaultChecked />
                            <input type="checkbox" defaultChecked />
                            <p>-</p>
                        </div>
                        <div className=' flex justify-between  p-3'>
                            <h5 className=' pl-5'>Third-party</h5>
                            <input className=' ml-[-45px]' type="checkbox" defaultChecked />
                            <input type="checkbox" defaultChecked />
                            <p>-</p>
                        </div >
                        <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg'>
                            <h5 className=' pl-5'>Tasks</h5>
                            <input type="checkbox" defaultChecked />
                            <input type="checkbox" defaultChecked />
                            <p>-</p>
                        </div>
                        <div id={`collapsible-header${3}`} className=' p-3  ' onClick={() => {
                            Collapsed(`collapsible-header${3}`, `collapsible-content${3}`)
                        }}>
                            <div className=' flex justify-between' >
                                <div className=' flex items-center ml-5 mr-[-60px]' >
                                    <IoIosArrowForward id="ArrowForward" className=" cursor-pointer" />
                                    <IoIosArrowDown id="ArrowDown" style={{ display: 'none' }} className=" cursor-pointer" />
                                    <h5>Companies</h5>
                                </div>
                                <input type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                        </div>
                        <div id={`collapsible-content${3}`} style={{ display: 'none' }} className=' ml-5'>
                            <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg'>
                                <h5 className=' pl-5'>Registartion</h5>
                                <input className=' ml-[-60px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                            <div className=' flex justify-between  p-3'>
                                <h5 className=' pl-5'>Compliance</h5>
                                <input className=' ml-[-60px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div >
                            <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg'>
                                <h5 className=' pl-5'>Application</h5>
                                <input className=' ml-[-60px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-between p-3 '>
                        <h5 className=' pl-5'>Tasks</h5>
                        <input type="checkbox" />
                        <input  type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg'>
                        <h5 className=' pl-5'>Transaction history</h5>
                        <input className=' ml-[-98px]' type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                        <p>-</p>
                    </div >
                </div>
                <div>
                    <div className=' flex justify-between items-center  p-3 '>
                        <div className='flex items-center gap-8'>
                            <h5 className=' pl-5 font-semibold'>New registartion</h5>
                            <select className=' ml-2' >
                                <option value="volvo">Assigned</option>
                            </select>
                        </div>
                        <input className=' ml-[-170px]' type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                        <p>-</p>
                    </div >
                </div>
                <div id={`collapsible-header${4}`} className=' p-3 bg-[#ECEFFF] rounded-lg ' onClick={() => {
                    Collapsed(`collapsible-header${4}`, `collapsible-content${4}`)
                }}>
                    <div className=' flex justify-between items-center' >
                        <div className=' flex items-center' >
                            <IoIosArrowForward id="ArrowForward" className=" cursor-pointer"  />
                            <IoIosArrowDown id="ArrowDown" style={{ display: 'none' }} className=" cursor-pointer" />
                            <h5  className=" font-semibold">Companies</h5>
                            <select className=' ml-20 bg-[#ECEFFF]' >
                                <option value="volvo">Assigned</option>
                            </select>
                        </div>
                        <input className=' ml-[-170px]' type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                        <p>-</p>
                    </div>
                </div>
                <div id={`collapsible-content${4}`} style={{ display: 'none' }}>
                    <div className=' flex justify-between p-3'>
                        <h5 className=' pl-5'>Overview</h5>
                        <input className=' ml-2' type="checkbox" defaultChecked />
                        <input type="checkbox" defaultChecked />
                        <p>-</p>
                    </div>
                    <div id={`collapsible-header${5}`} onClick={() => {
                            Collapsed(`collapsible-header${5}`, `collapsible-content${5}`)
                        }}>
                            <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg' >
                                <div className=' flex ml-5 items-center' >
                                    <IoIosArrowForward id="ArrowForward" className=" cursor-pointer"  />
                                    <IoIosArrowDown id="ArrowDown" style={{ display: 'none' }} className=" cursor-pointer"  />
                                    <h5>Tasks</h5>
                                </div>
                                <input className=' ml-5' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                        </div>
                        <div id={`collapsible-content${5}`} style={{ display: 'none' }} className=' ml-5'>
                            <div className=' flex justify-between  p-3'>
                                <h5 className=' pl-5'>Documents</h5>
                                <input className=' ml-[-28px]'  type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                            <div className=' flex justify-between  p-3  bg-[#ECEFFF] rounded-lg'>
                                <h5 className=' pl-5'>Visa center</h5>
                                <input className=' ml-[-28px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div >
                            <div className=' flex justify-between  p-3'>
                                <h5 className=' pl-5'>Financial resources</h5>
                                <input className=' ml-[-75px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <input  type="checkbox" defaultChecked />
                            </div>
                            <div className=' flex justify-between  p-3  bg-[#ECEFFF] rounded-lg'>
                                <h5 className=' pl-5'>Compliance</h5>
                                <input className=' ml-[-28px]' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <input  type="checkbox" defaultChecked />
                            </div>
                            <div className=' flex justify-between  p-3 '>
                                <h5 className=' pl-5'>Mailbox</h5>
                                <input className='' type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <input className=' ' type="checkbox" defaultChecked />
                            </div >
                            <div className=' flex justify-between  p-3 bg-[#ECEFFF] rounded-lg'>
                                <h5 className=' pl-5'>Activity</h5>
                                <input  type="checkbox" defaultChecked />
                                <input type="checkbox" defaultChecked />
                                <p>-</p>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default CollapsedRoles
