import Image from 'next/image'
import RightArrow from '../icons/RightArrow'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold leading-10'>
          Everything <br />
          is better <br /> with a <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className='flex gap-4 text-sm items-center'>
          <button className='px-4 py-2 uppercase rounded-full bg-primary text-white flex gap-2 items-center'>
            Order Now <RightArrow />
          </button>
          <button className='flex items-center gap-2  py-2 rounded-full text-gray-500 font-semibold'>
            Learn More <RightArrow />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image
          src='/pizza.png'
          fill
          objectFit='contain'
          className='x min-w-60'
        />
      </div>
    </section>
  )
}

export default Hero
