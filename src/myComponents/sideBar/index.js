// 固定在左侧  包含歌单、搜索功能
import React from "react";

import   './index.less'

export default function SideBar() {
  return (
    <>
      <div className='sideBar-container'> 
      <div className='logo-container'>
        logo
       </div>
      <div className='search-container'>searcher </div>
      <div className='songlist-container'>songlist </div>
      </div>
    </>
  )
}