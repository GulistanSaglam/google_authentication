"use client";

import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import profileDefault from '@/assets/images/profile.png';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {

  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [providers, setProviders] = useState(null);
  console.log(profileImage);
  useEffect(() => {
    const setAuthProviders = async() => {
      const res = await getProviders();
      setProviders(res);
    }
    setAuthProviders();
  }, []);



  return (
    <div className='flex items-center justify-between px-8 py-8 bg-black text-white' >
        <p >G-Auth</p>
      
        
        <div className='flex items-center gap-4'>

               { !session && (
                <>
                <Link href="/blog">Blog</Link>
                {providers && Object.values(providers).map((provider, index) => (
                   <button onClick={() => signIn(provider.id)} key={index} className="border-2 p-2 bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600 rounded-md">Login with Google</button>
                ))}
                
               
                </>
               )

               }
                 
               {session && (
                <>
                  <p className="border-2 p-2 bg-pink-600 border-pink-600 rounded-md text-black">Yayy You are Logged In!</p>
                  
                <button onClick={() => {
                  signOut()
                }} className="border-2 p-2 text-black bg-pink-600 border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-md">Logout</button>
                <Image
                  className="h-8 w-8 rounded-full"
                  src={profileImage || profileDefault}
                  alt=""
                  width={40}
                  height={40}
                />
                
                </>

               )}
              
        </div>
        </div>
  )
}

export default Navbar