import burger from '../assets/background-images/burger.png'
import coffee from '../assets/background-images/coffee.png'
import pizza from '../assets/background-images/pizza.png'
import shaurma from '../assets/background-images/shaurma.png'

const foods = [
	{
		id: 1,
		title: 'Dairy Queen',
		paragraph: 'Dairy Queen is one of the biggest fast-food.',
		oldPrice: 6,
		newPrice: 4,
		backgroundImage: coffee,
	},
	{
		id: 2,
		title: 'Pizza Hut',
		paragraph: 'Although the Pizza Hut Menu Prices .',
		oldPrice: 7,
		newPrice: 3,
		backgroundImage: pizza,
	},
	{
		id: 3,
		title: 'Burger King',
		paragraph: 'Together with McDonald’s, Burger King.',
		oldPrice: 6,
		newPrice: 5,
		backgroundImage: burger,
	},
	{
		id: 4,
		title: 'Papa John’s',
		paragraph: 'Papa John’s is one of the most popular fast-food.',
		oldPrice: 8,
		newPrice: 6,
		backgroundImage: shaurma,
	},
]

export default foods
