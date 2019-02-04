import React from 'react'
import axios from 'axios'

class Restaurants extends React.Component{
  componentDidMount(){
    axios.get('/api/fast-foods')
      .then(res => this.setState({ restaurants: res.data }))
  }


  render(){
    if(!this.state) return null
    console.log(this.state.restaurants)
    return(
      <div>
        {this.state.restaurants.map(restau =>
          <p key={restau._id}> {restau.name} </p>
        )}
      </div>
    )
  }
}


export default Restaurants
