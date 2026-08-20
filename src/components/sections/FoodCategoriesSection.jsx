import { categories } from '../../data/foodData'

export default function FoodCategories() {
	return (
		<>
			<section className='bg-[#1c1c1c] py-16'>
				<div className='max-w-300 mx-auto px-4 grid grid-cols-4 gap-8'>
					{categories.map(category => (
						<article
							key={category.id}
							className='bg-[#312f30] rounded-[10px] overflow-hidden'
						>
							<img
								src={category.image}
								alt={category.title}
								className='w-full h-44 object-cover'
							/>
							<div className='p-5 flex flex-col items-center gap-2 text-white'>
								<h3 className='w-full text-[20px] font-medium'>
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
