import React from 'react'
import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@material-ui/core'

const Profiletop = ()=>{

    const [{user},dispatch]=useStateValue();
    return(
        <div className="top_profile">
        <Avatar classname="profile_pic" src={user.photoURL}/>
        <h4>{user.displayName}</h4>
        </div>
    )
    
}

export default Profiletop;