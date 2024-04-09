import Link from 'next/link'
import Menu from '../icons/Menu'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-primary font-semibold text-2xl' href='/'>
        St Pizza
      </Link>

      <div>
        <div className='sm:hidden hover:cursor-pointer'>
          <Menu />
        </div>
        <nav className='items-center gap-8 text-gray-500 font-semibold hidden sm:flex'>
          <Link href='/'>Home</Link>
          <Link href='/'>Menu</Link>
          <Link href='#about' className='transition'>
            About
          </Link>
          <Link href='#contact'>Contact</Link>
          <Link
            href='/'
            className='bg-primary text-white px-8 py-2 rounded-full'
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
