import burger from '../../assets/images/burger.png'
import Button from '../ui/Button'

export default function PromoBanner() {
	return (
		<>
			<section className=' bg-[#312F30]'>
				<div className='max-w-300 mx-auto flex items-center justify-center gap-70 bg-[#312F30]'>
					<img src={burger} alt='' className='h-125' />
					<aside className='text-white flex flex-col gap-4 items-start'>
						<h2 className='text-[45px] font-medium'>Burger King </h2>
						<p className='text-[16px] font-normal'>
							Together with McDonald’s, Burger King has grown <br /> to become
							synonymous with burgers in the US.
						</p>
						<div className='flex  gap-2 items-end text-[#F6762C] font-medium'>
							<span className='text-[20px]'>$6</span>
							<span className='text-[16px] line-through'>$8</span>
						</div>
						<Button />
					</aside>
				</div>
			</section>
		</>
	)
}
