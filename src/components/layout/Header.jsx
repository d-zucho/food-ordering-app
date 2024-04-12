'use client'

import Link from 'next/link'
import Menu from '../icons/Menu'
import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Link className='text-primary font-semibold text-2xl' href='/'>
          St Pizza
        </Link>
        <nav className='items-center gap-8 text-gray-500 font-semibold hidden md:flex'>
          <Link href='/'>Home</Link>
          <Link href='/'>Menu</Link>
          <Link href='#about' className='transition'>
            About
          </Link>
          <Link href='#contact'>Contact</Link>
        </nav>
      </div>

      <div className='md:hidden hover:cursor-pointer'>
        <Menu />
      </div>
      <div className='hidden md:flex items-center gap-4'>
        <Link href='/' className='bg-primary text-white px-8 py-2 rounded-full'>
          Login
        </Link>
        <Link
          href='/register'
          className='text-gray-500 px-8 py-2 rounded-full bg-gray-200'
        >
          Register
        </Link>
      </div>
    </header>
  )
}

export default Header
