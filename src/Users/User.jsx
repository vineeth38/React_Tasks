import { useState } from 'react'
import './users.css'
function User(user){
    return <div className='user'>
        <img src={user.UDetails.image} alt=""/>
        <h4>{user.UDetails.firstName} {user.UDetails.lastName}</h4>
        <span>Gender : {user.UDetails.gender}</span>
        <span>Ph No.:{user.UDetails.phone}</span>
    </div>
}
export default User;