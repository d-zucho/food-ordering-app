import Image from 'next/image'
import RightArrow from '../icons/RightArrow'
import Button from '../Button'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-5xl font-semibold leading-12'>
          Everything <br />
          is better <br /> with a <span className='text-primary'>Pizza</span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className='flex gap-4 text-sm items-center'>
          <Button
            bg={'primary'}
            rounded={'full'}
            color={'white'}
            className={
              'uppercase flex items-center gap-2 hover:scale-[102%] transition'
            }
          >
            Order Now <RightArrow />
          </Button>
          <Button
            color={'gray-500'}
            rounded={'full'}
            className='flex items-center gap-2 font-semibold'
          >
            Learn More <RightArrow />
          </Button>
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
