import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { searchMusic } from '@/services/login'

export default function Search() {
  const [searchkey, setSearchKey] = useState()
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchKey(event.target.value)
  }
  const search = () => {
    searchMusic({ keywords: searchkey }).then((res) => {
      console.log(res, 'res')
    })
  }
  return (
    <>
      <TextField onChange={handleChange} />
      <Button onClick={search}>搜索</Button>
    </>
  )
}
