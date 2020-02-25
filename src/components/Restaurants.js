import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Image, Card } from 'semantic-ui-react'

const Restaurants = (props) => {
	const [ restaurants, setRestaurants ] = useState([])
	useEffect(() => {
		axios.get('/api/fast-foods').then((res) => setRestaurants(res.data))
	}, [])

	if (!restaurants) return null
	return (
		<Grid columns={5}>
			{restaurants.map((restau) => (
				<Grid.Column key={restau._id}>
					<Card>
						<Image src={restau.image} />
						<Card.Content>
							<Card.Header>{restau.name}</Card.Header>
							<Card.Meta>
								<span className="date">
									Established in {restau.yearEstablished}
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
				</Grid.Column>
			))}
		</Grid>
	)
}

export default Restaurants
