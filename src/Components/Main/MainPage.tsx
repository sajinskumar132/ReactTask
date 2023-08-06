import React from 'react'
import SubComponant1 from './MainPageSubComponent/SubComponant1/SubComponant1'
import SubComponant2 from './MainPageSubComponent/SubComponant2/SubComponant2'

function MainPage() {
  return (
    <div className=' grid grid-cols-6 '>
      <div className= "col-span-1">
         <SubComponant1/>
      </div>
      <div className=" col-span-5">
        <SubComponant2/>
      </div>
       
    </div>
  )
}

export default MainPage
