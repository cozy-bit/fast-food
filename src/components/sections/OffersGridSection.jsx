import foods from '../../data/foodData'
import Button from '../ui/Button'

export default function OffersGrid() {
	console.log(foods)

	return (
		<>
			<section className='bg-[#1C1C1C] py-30'>
				<div className='max-w-300 mx-auto grid  grid-cols-2 grid-rows-2 text-white justify-items-center gap-y-9'>
					{foods.map(food => (
						<article key={food.id} className=' w-[94%] h-75 relative'>
							<img
								src={food.backgroundImage}
								alt=''
								className='absolute z-1  w-full h-full'
							/>
							<div
								className={`z-20 absolute top-17 w-60 flex flex-col items-start gap-1 ${
									food.id === 1 || food.id === 3 ? 'right-5' : 'left-5'
								}`}
							>
								<h1 className='text-[30px] font-medium'>{food.title}</h1>
								<p className='text-[16px] font-normal'>{food.paragraph}</p>
								<div className='flex  gap-2 items-end text-[#F6762C] font-medium'>
									<span className='text-[20px]'>${food.newPrice}</span>
									<span className='text-[16px] line-through'>
										${food.newPrice}
									</span>
								</div>
								<Button />
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	)
}
