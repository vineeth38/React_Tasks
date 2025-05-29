import { useState } from 'react'
import UData from './UserData'
import User from './User.jsx'
import './users.css'
export function Users(){
    return <div id='Users_container'>
        {
          UData.map((user)=>{
            return <User UDetails={user} />
          })
        }
    </div>
}