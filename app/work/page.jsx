'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import WorkSliderBtns from '@/components/WorkSliderBtns'
const works = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione ducimus sequi eveniet ab excepturi? Porro quas magni.',
    stack: [
      {
        name: 'HTML 5',
      },
      {
        name: 'Css 3',
      },
      {
        name: 'JavaScript',
      },
    ],
    image: '/assets/work/',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione ducimus sequi eveniet ab excepturi? Porro quas magni.',
    stack: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
      },
      {
        name: 'Node.js',
      },
    ],
    image: '/assets/work/',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione ducimus sequi eveniet ab excepturi? Porro quas magni.',
    stack: [
      {
        name: 'Next.js',
      },
      {
        name: 'Css 3',
      },
      {
        name: 'JavaScript',
      },
    ],
    image: '/assets/work/',
    live: '',
    github: '',
  },
]

const Work = () => {
  const [project, setProject] = useState(works[0])
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex
    //update project state based on current slide index
    setProject(works[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* otline num */}
              <div className='font-extrabold leading-none text-transparent text-8xl text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className='border border-white/50'></div>
              {/* project links */}
              <div className='flex gap-4'>
                {/* live link */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/5 group'>
                        <BsArrowUpRight className='text-2xl text-white group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>Live Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/5 group'>
                        <BsGithub className='text-2xl text-white group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>github Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {works.map((item, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 z-10 w-full h-full bg-black/10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt='project-img'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 x-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all'
                iconsStyles=''
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
