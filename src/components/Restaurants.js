import React from 'react'
import axios from 'axios'
import { Grid, Image, Card } from 'semantic-ui-react'

class Restaurants extends React.Component{
  componentDidMount(){
    axios.get('/api/fast-foods')
      .then(res => this.setState({ restaurants: res.data }))
  }


  render(){
    if(!this.state) return null
    return(
      <Grid columns={5}>
        {this.state.restaurants.map(restau =>
          <Grid.Column key={restau._id}>
            <Card>
              <Image src={restau.image}/>
              <Card.Content>
                <Card.Header>{restau.name}</Card.Header>
                  <Card.Meta>
                  <span className='date'>Established in {restau.yearEstablished}</span>
                  </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        )}
      </Grid>
  )}
}


export default Restaurants
