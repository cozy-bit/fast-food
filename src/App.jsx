import './index.css'

import Layout from './components/layout/Layout'
import Hero from './components/sections/HeroSection'
import FoodCategories from './components/sections/FoodCategoriesSection'
import PromoBanner from './components/sections/PromoBannerSection'
import OffersGrid from './components/sections/OffersGridSection'
import Testimonials from './components/sections/Testimonials'
function App() {
	return (
		<>
			<Layout>
				<Hero />
				<FoodCategories />
				<PromoBanner />
				<OffersGrid />
				<Testimonials />
			</Layout>
		</>
	)
}

export default App
