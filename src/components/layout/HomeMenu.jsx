import Image from 'next/image'

import MenuItem from '../menu/MenuItem'

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
      {/* container */}
      <div className='grid grid-cols-3 gap-4 text-center mt-24'>
        {/* item container */}
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu
