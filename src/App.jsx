import './index.css'

import Layout from './components/layout/Layout'
import PromoBanner from './components/sections/PromoBannerSection'
import OffersGrid from './components/sections/OffersGridSection'
function App() {
	return (
		<>
			<Layout>
				{/* ваши теги тут будут ребят */}
				<PromoBanner />
				<OffersGrid />
			</Layout>
		</>
	)
}

export default App
