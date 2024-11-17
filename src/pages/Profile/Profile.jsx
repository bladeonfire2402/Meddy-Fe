import { useState } from "react"
import SideBar from "../../components/SideBar/SideBar"

import { ProfileSection } from "../../section/Profile/ProfileSection"
import OrderSection from "../../section/Order/OrderSection"
import PerscriptionSection from "../../section/Perscription/Perscription"

const ProfilePage=()=>{
    const [section,setSection]=useState('profile')

    const switchSection=()=>{
        if(section==='profile'){
            return(
                <ProfileSection/>
            )
        }
        else if(section==='order'){
            return(
                <OrderSection/>
            )
        }
        else if(section==='prescription'){
            return(
                <PerscriptionSection/>
            )
        }
    }

    return(
        <div className="profile-wrapper flex justify-center py-5 bg-slate-100">
            <div className="flex wrapper gap-9">
            {/*Side bar*/}
            <div className="w-1/4">
                <SideBar setSection={setSection} />
            </div>


            {/*content*/}
            <div className="w-3/4">
              <div>{switchSection()}</div>
            </div>

            </div>

        </div>
    )
}
export default ProfilePage



