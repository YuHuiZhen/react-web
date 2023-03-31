import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content'
import SideBar from '@/myComponents/sideBar'

import './index.less'

export default function Wrapper(){
  return (
    <>
    <Header/>
    <SideBar />
    <Content/>
    <Footer/>
    </>
  )
}