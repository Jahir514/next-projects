'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    serial: 1,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium facilis aspernatur, nisi illo adipisci voluptatum minima amet et a provident dignissimos',
    href: '',
  },
  {
    serial: 2,
    title: 'Web Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium facilis aspernatur, nisi illo adipisci voluptatum minima amet et a provident dignissimos',
    href: '',
  },
  {
    serial: 3,
    title: 'SEO',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium facilis aspernatur, nisi illo adipisci voluptatum minima amet et a provident dignissimos',
    href: '',
  },
  {
    serial: 4,
    title: 'App Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium facilis aspernatur, nisi illo adipisci voluptatum minima amet et a provident dignissimos',
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
