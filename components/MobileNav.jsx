'use client'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]
const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-20 mb-20 text-center text-2xl'>
          Jahir Hasan <span className='text-accent'>.</span>
        </div>
        {/* nav */}
        <nav className='flex flex-col gap-8 items-center justify-center'>
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`
            ${
              link.path === pathName && 'text-accent border-b-2 border-accent '
            } font-medium hover:text-accent transition-all capitalize`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
