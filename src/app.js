import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import { Menu, Container, Grid } from 'semantic-ui-react'
import Restaurants from './components/Restaurants'
import Home from './components/Home'
import RestaurantsNew from './components/RestaurantsNew'

const App = (props) => {
	return (
		<BrowserRouter>
			<Container>
				<Menu>
					<Menu.Item>
						<Link to={'/'}>Home</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to={'/restaurants'}> View Restaurants </Link>
					</Menu.Item>

					<Menu.Item>
						<Link to={'/restaurants/new'}> Add Restaurant</Link>
					</Menu.Item>
				</Menu>

				<Switch>
					<Route path="/restaurants/new" component={RestaurantsNew} />
					<Route path="/restaurants" component={Restaurants} />
					<Route path="/" component={Home} />
				</Switch>
			</Container>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
