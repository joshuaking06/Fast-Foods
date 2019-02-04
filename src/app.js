import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Restaurants from './components/Restaurants'
import Home from './components/Home'
import RestaurantsNew from './components/RestaurantsNew'

import axios from 'axios'

class App extends React.Component{


  render(){
    return(
      <BrowserRouter>
        <main>
          <h1> Fast Food Lovers! </h1>



          <Switch>
            <Route path="/restaurants/new" component={RestaurantsNew}/>
            <Route path="/restaurants" component={Restaurants}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
