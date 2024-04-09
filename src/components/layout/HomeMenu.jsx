import Image from 'next/image'
import Button from '../Button'

const HomeMenu = () => {
  return (
    <section className='w-full mt-12'>
      {/* Header */}
      <div className='relative'>
        <div className='absolute left-0 -top-16 -z-10'>
          <Image src='/sallad1.png' width={109} height={189} />
        </div>
        <div className='absolute right-0 -top-36 -z-10'>
          <Image src='/sallad2.png' width={109} height={195} />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-gray-500 font-semibold uppercase leading-4'>
          Check out
        </h2>
        <h3 className='text-primary font-bold text-4xl italic'>Menu</h3>
      </div>

      {/* Menu Items */}
      <div className='grid grid-cols-3 gap-4 text-center mt-24'>
        <div className='bg-gray-300 p-4 rounded-lg text-center'>
          <img src='/pizza.png' alt='pizza' />
          <h4 className='font-semibold my-2'>Pepperoni Pizza</h4>
          <p className='text-gray-400 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className='px-4 py-2'>Add to cart</button>
          <Button label='Add to cart' bg='primary' color='white' rounded='lg' />
        </div>
      </div>
    </section>
  )
}

export default HomeMenu
