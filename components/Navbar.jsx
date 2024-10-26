'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]
const Navbar = () => {
  const pathName = usePathname()
  return (
    <nav className='flex gap-8 capitalize'>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`
            ${
              link.path === pathName && 'text-accent border-b-2 border-accent '
            } font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
export default Navbar
