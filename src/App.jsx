import './index.css'

import Layout from './components/layout/Layout'
import Hero from './components/sections/HeroSection'
import FoodCategories from './components/sections/FoodCategoriesSection'
import PromoBanner from './components/sections/PromoBannerSection'
import OffersGrid from './components/sections/OffersGridSection'
function App() {
	return (
		<>
			<Layout>
				<Hero />
				<FoodCategories />
				<PromoBanner />
				<OffersGrid />
			</Layout>
		</>
	)
}

export default App
