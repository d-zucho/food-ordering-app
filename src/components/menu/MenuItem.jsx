import Image from 'next/image'
import Button from '../Button'
const MenuItem = () => {
  return (
    <div className='bg-gray-300 p-4 rounded-lg text-center'>
      <img src='/pizza.png' alt='pizza' />
      <h4 className='font-semibold mt-2 text-xl'>Pepperoni Pizza</h4>
      <span>$12</span>
      <p className='text-gray-400 text-sm my-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='flex flex-col'>
        <Button bg='primary' color='white' rounded='lg'>
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
