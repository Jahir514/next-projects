'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    serial: 1,
    title: 'Web Development',
    description:
      'As a web development service provider, I specialize in creating dynamic and responsive websites using HTML, CSS, and JavaScript. Leveraging Node.js and Express for robust back-end solutions, I ensure seamless performance and scalability. I also utilize Tailwind CSS for efficient styling, allowing for customizable and visually appealing designs. My approach focuses on delivering user-friendly experiences tailored to clients’ needs, enhancing their online presence and engagement.',
    href: '',
  },
  {
    serial: 2,
    title: 'Web Design',
    description:
      'As a web design service provider, I create visually stunning and user-friendly websites using HTML, CSS, and JavaScript. By leveraging frameworks like Tailwind CSS and Bootstrap, I ensure responsive and modern designs that enhance user experience across all devices. My focus is on delivering tailored solutions that meet client needs while maintaining aesthetic appeal and functionality.',
    href: '',
  },
  {
    serial: 3,
    title: 'Email Template Design',
    description:
      'As an email template design service provider, I specialize in crafting visually appealing and responsive email templates using HTML, CSS, and JavaScript. My designs ensure compatibility across various email clients and devices, providing a seamless experience for users. By focusing on clean code and engaging layouts, I help businesses effectively communicate their messages and enhance their marketing campaigns.',
    href: '',
  },
  {
    serial: 4,
    title: 'Bug Fixing',
    description:
      'As a bug-fixing service provider for React/Vue applications, I specialize in identifying and resolving issues to enhance performance and user experience. With a thorough understanding of Reacts/Vue component architecture and state management, I efficiently troubleshoot bugs, optimize code, and implement best practices to ensure your application runs smoothly.',
    href: '',
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 gap-8 xl:grid-cols-2'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex flex-col flex-1 gap-6 group'>
                {/* service top */}
                <div className='flex items-center justify-between w-full'>
                  <div className='text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover'>
                    {service.serial}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white/80 group-hover:bg-accent transition-all duration-500 hover:rotate-[-45deg]'
                  >
                    <BsArrowDownRight className='text-2xl text-primary' />
                  </Link>
                </div>
                {/* service title */}
                <h2 className='text-[38px] leading-none font-bold group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                {/* service description */}
                <p className='text-white/60'>{service.description}</p>
                {/* border */}
                <div className='w-full border-b border-white/20'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
export default Services
