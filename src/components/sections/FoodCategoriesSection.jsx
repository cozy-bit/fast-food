import { categories } from '../../data/foodData'

export default function FoodCategories() {
	return (
		<>
			<section className='bg-[#1c1c1c] py-16'>
				<div className='max-w-300 mx-auto px-4 grid grid-cols-4 gap-8'>
					{categories.map(category => (
						<article
							key={category.id}
							className='group bg-[#312f30] rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40'
						>
							<div className='overflow-hidden'>
								<img
									src={category.image}
									alt={category.title}
									className='w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
							<div className='p-5 flex flex-col items-center gap-2 text-white'>
								<h3 className='w-full text-[20px] font-medium transition-colors duration-300 group-hover:text-[#F6762C]'>
									{category.title}
								</h3>
								<p className='text-[16px] font-normal text-center text-white/80'>
									{category.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	)
}
