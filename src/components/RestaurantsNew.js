import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import axios from 'axios'

class RestaurantsNew extends React.Component{
  constructor(){
    super()

    this.state={
      postData: {
        name: '',
        origin: '',
        image: '',
        yearEstablished: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }){
    const postData= {...this.state.postData, [name]:value }
    this.setState({ postData })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/fast-foods', this.state.postData)
      .then(res => console.log(res))
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>

        <Form.Field>
          <label>Restaurant Name</label>
          <Input
            onChange={this.handleChange}
            placeholder='Restaurant Name'
            name="name"
            value={this.state.postData.name}
          />
        </Form.Field>

        <Form.Field>
          <label>Restaurant Image</label>
          <Input
            onChange={this.handleChange}
            placeholder='Restaurant Image'
            name="image"
            value={this.state.postData.image}
          />
        </Form.Field>

        <Form.Field>
          <label>Year Established</label>
          <Input
            onChange={this.handleChange}
            placeholder='Year Established'
            name="yearEstablished"
            value={this.state.postData.yearEstablished}
          />
        </Form.Field>

        <Form.Field>
          <label>Restaurant Origin</label>
          <Input
            onChange={this.handleChange}
            placeholder='Restaurant Origin'
            name="origin"
            value={this.state.postData.origin}
          />
        </Form.Field>



        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default RestaurantsNew
