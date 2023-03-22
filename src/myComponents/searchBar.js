import React from 'react'
import Button from '@material-ui/core/Button'
import { searchMusic } from '../services/login'

// 搜索栏
export default function searchBar() {
  searchMusic({ keywords: '林俊杰' })
  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </>
  )
}
