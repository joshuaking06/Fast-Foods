import React from 'react'
import axios from 'axios'

class FastFoodsIndex extends React.Component{
  componentDidMount(){
    axios.get('/api/fast-foods')
      .then(res => this.setState({ restaurants: res.data }))
  }


  render(){
    if(!this.state) return null
    console.log(this.state.restaurants)
    return(
      <h1> Check log </h1>
    )
  }
}


export default FastFoodsIndex
