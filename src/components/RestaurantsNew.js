import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import axios from 'axios'

const RestaurantsNew = (props) => {
	const [ restaurantData, setRestaurantData ] = useState({
		name: '',
		origin: '',
		image: '',
		yearEstablished: ''
	})

	const handleChange = ({ target: { name, value } }) => {
		const newData = { ...restaurantData, [name]: value }
		setRestaurantData(newData)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios
			.post('/api/fast-foods', restaurantData)
			.then((res) => props.history.push('/restaurants'))
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Restaurant Name</label>
				<Input
					onChange={handleChange}
					placeholder="Restaurant Name"
					name="name"
					value={restaurantData.name}
				/>
			</Form.Field>

			<Form.Field>
				<label>Restaurant Image</label>
				<Input
					onChange={handleChange}
					placeholder="Restaurant Image"
					name="image"
					value={restaurantData.image}
				/>
			</Form.Field>

			<Form.Field>
				<label>Year Established</label>
				<Input
					onChange={handleChange}
					placeholder="Year Established"
					name="yearEstablished"
					value={restaurantData.yearEstablished}
				/>
			</Form.Field>

			<Form.Field>
				<label>Restaurant Origin</label>
				<Input
					onChange={handleChange}
					placeholder="Restaurant Origin"
					name="origin"
					value={restaurantData.origin}
				/>
			</Form.Field>

			<Button type="submit">Submit</Button>
		</Form>
	)
}

export default RestaurantsNew
