import Link from 'next/link'
import { Button } from './ui/button'
// components
import Navbar from './Navbar'
import MobileNav from './MobileNav'
const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-3xl md:text-4xl font-semibold'>
            Jahir Hasan<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* desktop Nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Navbar />
          <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* mobile Nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
