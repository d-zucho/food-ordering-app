import Image from 'next/image'

import MenuItem from '../menu/MenuItem'
import SectionHeader from './SectionHeader'

const HomeMenu = () => {
  return (
    <section className='w-full mt-32'>
      {/* Header */}
      <div className='relative'>
        <div className='absolute left-0 -top-16 -z-10'>
          <Image src='/sallad1.png' width={109} height={189} />
        </div>
        <div className='absolute right-0 -top-36 -z-10'>
          <Image src='/sallad2.png' width={109} height={195} />
        </div>
      </div>
      <SectionHeader subheader='Check out our' header='Menu' />

      {/* Menu Items */}
      {/* container */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-24'>
        {/* item container */}
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu
