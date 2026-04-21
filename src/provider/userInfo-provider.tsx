"use client"
import { getUserData } from '@/actions/userInfo';
import { User, userData } from '@/types/user';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react'
interface UserInfo {
    userName: string;
    userEmail: string;
    userPhone: string;
    userRole: string;
    userId: string;
}

interface UserInfoContextType {
    user: UserInfo;
    setUser: React.Dispatch<React.SetStateAction<UserInfo>>;
}

export const UserInfoContext = createContext<UserInfoContextType>({
    user: {
        userName: "",
        userEmail: "",
        userPhone: "",
        userRole: "",
        userId: "",
    },
    setUser: () => {},
});
export default function UserInfoProvider({children}:{children:React.ReactNode}) {
    const {data:session , status} = useSession();
    const [user, setUser] = useState<UserInfo>({
        userName: "",
        userEmail: "",
        userPhone: "",
        userRole: "",
        userId: "",
    });

    
    useEffect(() => {
        async function getUserInfo(){
            try {
                const response : User = await  getUserData();
                const userResponse : userData =  response.data;
                setUser({
                    userName: userResponse.name,
                    userEmail: userResponse.email,
                    userPhone: userResponse.phone,
                    userRole: userResponse.role,
                    userId: userResponse._id,
                });
                // console.log(userResponse,"from user information provider")
            } catch (error) {
                
                console.log(error)
            }
        }
        if(status==="unauthenticated"){
            return;
        }
        if(status==="authenticated"){
            getUserInfo();
        }
    }, [status])
    return (
        <>
        <UserInfoContext.Provider value={{ user, setUser }}>
            {children}
        </UserInfoContext.Provider>
        </>
    )
}
