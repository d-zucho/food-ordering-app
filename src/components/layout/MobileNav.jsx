import Link from 'next/link'

const MobileNav = () => {
  return (
    <div className='w-[300px] h-[500px] absolute top-0 -right-[300px] border flex flex-col justify-around bg-gray-200/75 rounded-tl-lg rounded-bl-lg'>
      <nav className='items-center gap-8 text-gray-500 font-semibold flex flex-col'>
        <Link href='/'>Home</Link>
        <Link href='/'>Menu</Link>
        <Link href='/' className='transition'>
          About
        </Link>
        <Link href='#contact'>Contact</Link>
      </nav>
      <div className='flex flex-col items-center gap-4 w-full'>
        <Link
          href='/'
          className='bg-primary text-white px-8 py-2 rounded-full w-3/4 text-center'
        >
          Login
        </Link>
        <Link
          href='/register'
          className='text-gray-500 px-8 py-2 rounded-full bg-gray-200 w-3/4 text-center'
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default MobileNav
