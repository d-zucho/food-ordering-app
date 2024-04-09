import Image from 'next/image'
import Button from '../Button'
const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center shadow-md hover:bg-gray-100 hover:scale-[101.5%] transition'>
      <div className=''>
        <img
          src='/pizza.png'
          alt='pizza'
          className='transition max-h-32 mx-auto lg:max-h-52'
        />
      </div>
      <h4 className='font-semibold mt-2 text-xl'>Pepperoni Pizza</h4>
      <span>$12</span>
      <p className='text-gray-400 text-sm my-2 hidden sm:block'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='flex flex-col'>
        <Button
          bg='primary'
          color='white'
          rounded='lg'
          className={
            'px-8 mx-auto hover:scale-105 transition-transform shadow-md'
          }
        >
          Add to cart
        </Button>
        <Button bg='white' color='black' rounded='lg' className='text-xs'>
          Learn more
        </Button>
      </div>
    </div>
  )
}

export default MenuItem
