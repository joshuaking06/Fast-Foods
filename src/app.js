import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import FastFoodsIndex from './components/FastFoodsIndex'
import Home from './components/Home'

import axios from 'axios'

class App extends React.Component{
  componentDidMount(){
    axios.get('/api/fast-foods')
      .then(res => console.log(res))
  }

  render(){
    return(
      <BrowserRouter>
        <main>
          <h1> Fast Food Lovers! </h1>


          <Switch>
            <Route path="/fast-foods" component={FastFoodsIndex}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
