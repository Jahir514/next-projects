'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'hasanjahir30@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Mobile No',
    description: '+88 01851171505',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Uttara, Dhaka, Banglades',
  },
]
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[60%] order-2 xl:order-none'>
            {/* form */}
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-3xl text-accent'>Lets Work Together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                vero nihil adipisci tempora laudantium distinctio ullam fugit
                obcaecati sunt nesciunt culpa consequuntur.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Input type='firstName' placeholder='First name' />
                <Input type='lastName' placeholder='Last name' />
                <Input type='email' placeholder='Email Address' />
                <Input type='phone' placeholder='Mobile No' />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='web-dev'>Web Development</SelectItem>
                    <SelectItem value='web-design-b'>
                      Web Design with Bootstrap
                    </SelectItem>
                    <SelectItem value='web-desing-t'>
                      Web Design with Tailwind
                    </SelectItem>
                    <SelectItem value='email-template'>
                      Email Template Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here'
              />
              {/* button */}
              <Button size='md' className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className='flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
