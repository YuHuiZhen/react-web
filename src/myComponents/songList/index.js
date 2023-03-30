import React,{useEffect} from "react"
import { getBestPlaylist } from '@/services/songs'

export default function SongList(){
  useEffect(() => {
    // 查询精品歌单
    async function getTags() {
      const res = await getBestPlaylist()
      console.log('res', res)
    }
    getTags()
  }, [])
  return (
    <>

    </>
  )
}