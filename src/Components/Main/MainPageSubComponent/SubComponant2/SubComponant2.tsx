import React from 'react'
import Filter from '../../../Filter/Filter'
import DashboardTable from '../../../Table/DashboardTable/DashboardTable'

function SubComponant2() {
  return (
    <div  className=' divide-y divide-[#DFE4FF] ' >
      <div>
        <h5 className='  px-8 py-4 font-semibold text-xl'>Companies</h5>
      </div>
     <div>
       <Filter/>
       <DashboardTable/>
     </div>
    </div>
  )
}

export default SubComponant2
