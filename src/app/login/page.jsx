'use client'

import { useSession, signIn } from "next-auth/react"
import GoogleIcon from '@mui/icons-material/Google';
import { redirect } from 'next/navigation';

export default function Login(){
    const {data:session} = useSession();
    if(session){
        redirect('/')
    }
    return(
        <div className="loginPageDiv">
            <div className="loginDiv">
                <button className="loginBtn" tyle="button" onClick={()=>{signIn('google')}}><GoogleIcon/>Continue with Google</button>
            </div>
        </div>
    )
}