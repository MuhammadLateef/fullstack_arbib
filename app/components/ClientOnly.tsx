'use client'
import React,{ useEffect, useState} from 'react'
interface ClientOnlyProps {
    children:React.ReactNode;
}
export const ClientOnly:React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounded,setHasMounded] = useState(false);
    useEffect(()=>{
        setHasMounded(true)
    },[]);
    if(!hasMounded){
        return null;
    }
  return (
    <div>{children}</div>
  )
}
