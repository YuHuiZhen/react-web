import React from "react"
import Nav from "@/myComponents/nav"
import Login from '@/components/Login'

export default function Header(){
  
  return (
    <div className="header-wrapper"> 
     <Nav/>
     <Login />
    </div>
  )
}