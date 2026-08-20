import heroBurger from '../../assets/images/hero-burger.png'
import Button from '../ui/Button'

export default function Hero() {
	return (
		<>
			<section className='group relative bg-[#1c0d0d] overflow-hidden'>
				<img
					src={heroBurger}
					alt=''
					className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
				/>
				<div className='relative max-w-300 mx-auto px-4 py-44 flex flex-col items-start gap-5 text-white'>
					<span className='text-sm font-medium tracking-[1.4px]'>
						FAST FOOD BURGERS
					</span>
					<h1 className='text-[57px] font-medium leading-[1.15] max-w-xl'>
						The fastest food, for instant hunger.
					</h1>
					<p className='text-[18px] font-normal max-w-lg text-white/80'>
						Some food has looked so awful that it's looked like something that
						the dog's brought home, yet after one mouthful I've been left
						eating my thoughts, my words & my food and gone back for seconds.
					</p>
					<Button>ORDER NOW</Button>
				</div>
			</section>
		</>
	)
}
