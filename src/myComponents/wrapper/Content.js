import React, { useEffect, useState } from 'react'
import List from '@/myComponents/list'
import Loading from '@/components/Loading'

import { getNewestMV } from 'services/mv'

export default function Content() {
  // 记录是否加载
  const [tilesData, setData] = useState()

  // 展示最新mv
  useEffect(() => {
    getNewestMV().then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className="content-wrapper">
      {tilesData ? <List tilesData={tilesData} /> : <Loading />}
    </div>
  )
}
