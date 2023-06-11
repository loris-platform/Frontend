'use client'

import { useSession, signOut } from "next-auth/react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar(){
    const {data:session} = useSession();
    const [showProfile, setShowProfile] = useState(false);
    if(session){
        return(
            <nav className="navbarContainer">
                <h1 style={{corsor:"pointer"}}><Link href='/'>Loris</Link></h1>
                    <div onMouseEnter={()=>setShowProfile(true)} onMouseLeave={()=>setShowProfile(false)}  className="profileIcon">
                        <Image style={{borderRadius: "100%"}} src={session.user.image} height={35} width={35} alt = "Profile"/>
                        {showProfile?<div className="DropdownDiv">
                            <ul>
                                <li>Profile</li>
                                <li>Orders</li>
                                <li style={{cursor:'pointer'}} onClick={signOut}>LogOut</li>
                            </ul>
                        </div>:null}
                    </div>
            </nav>
    )
    }else{
        return(
                <nav className="navbarContainer">
                    <h1 style={{corsor:"pointer"}}><Link href='/'>Loris</Link></h1>
                    <div onMouseEnter={()=>setShowProfile(true)} onMouseLeave={()=>setShowProfile(false)}  className="profileIcon">
                        <AccountCircleIcon/>
                        {showProfile?<div className="DropdownDiv">
                            <ul>
                                {/* <li>Profile</li>
                                <li>Orders</li> */}
                                <li><Link href="/login">LogIn/SignIn</Link></li>
                            </ul>
                        </div>:null}
                    </div>
                </nav>
        )
    }
}