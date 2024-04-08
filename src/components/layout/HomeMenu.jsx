import Image from 'next/image'

const HomeMenu = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='relative'>
        <div className='h-48 w-48 absolute -left-12'>
          <Image src='/sallad1.png' fill objectFit='contain' />
        </div>
        <div className='h-48 absolute right-0'>
          <Image src='/sallad2.png' width={109} height={195} />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-gray-500 font-semibold uppercase leading-4'>
          Check out
        </h2>
        <h3 className='text-primary font-bold text-4xl italic'>Menu</h3>
      </div>
    </section>
  )
}

export default HomeMenu
