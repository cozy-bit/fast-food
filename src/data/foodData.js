import burger from '../assets/background-images/burger.png'
import coffee from '../assets/background-images/coffee.png'
import pizza from '../assets/background-images/pizza.png'
import shaurma from '../assets/background-images/shaurma.png'

import chickenPaella from '../assets/images/categories/chicken-paella.png'
import tacoDelMar from '../assets/images/categories/taco-del-mar.png'
import bonAuPain from '../assets/images/categories/bon-au-pain.png'
import pizzaHut from '../assets/images/categories/pizza-hut.png'

export const categories = [
	{
		id: 1,
		title: 'Chicken Paella',
		description: "We just don't make and sell food.Good food warms.",
		image: chickenPaella,
	},
	{
		id: 2,
		title: 'Taco Del Mar',
		description: 'Taco Del Mar brings the best out of Mexican cuisine with fresh.',
		image: tacoDelMar,
	},
	{
		id: 3,
		title: 'Bon Au Pain',
		description: 'Bon Au Pain is a pioneer in the healthy fast food scene.',
		image: bonAuPain,
	},
	{
		id: 4,
		title: 'Pizza Hut.',
		description: 'Although the Pizza Hut Menu Prices have tumbled over the years.',
		image: pizzaHut,
	},
]

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
