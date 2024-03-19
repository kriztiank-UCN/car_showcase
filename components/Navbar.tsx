import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      {/* <ul className='flex space-x-6 mr-6 text-lg'>
        <li>
          <a href='register.html' className='text-white'>
            Register
          </a>
        </li>
        <li>
          <a href='login.html' className='text-white'>
            Login
          </a>
        </li>
      </ul> */}
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
)

export default NavBar
