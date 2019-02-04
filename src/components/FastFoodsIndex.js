import React from 'react'
import axios from 'axios'

const FastFoodsIndex = () => {
  axios.get('/api/fast-foods')
    .then(res => console.log(res))
  return(
    <h1> Index Page </h1>
  )
}


export default FastFoodsIndex
