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
    category: 'FullStack',
    title: 'project 1',
    description:
      'E-commerce website for amana group ltd. Display product based on category. Product add to cart system. Product delivery system. Search and filter product etc feature has in this project.',
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
      {
        name: 'Vue',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'Node.js',
      },
      {
        name: 'express.js',
      },
    ],
    image: '/assets/work/big-bazar-img.png',
    live: 'https://amanabigbazar.com',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'project 2',
    description:
      'An informative website for amana international sister concern of amana group ltd. Website is used to display brand, category, services, blog of the concern.',
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
      {
        name: 'Bootstrap',
      },
    ],
    image: '/assets/work/ailfood-net.png',
    live: 'https://ailfood.net/',
    github: '',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'project 3',
    description:
      'An informative website for amana agro sister concern of amana group ltd. Website is used to display brand, category, services, blog of the concern.',
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
      {
        name: 'Bootstrap',
      },
    ],
    image: '/assets/work/amanaagrobd.png',
    live: 'https://amanaagrobd.com/',
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
              <ul className='flex flex-wrap gap-4'>
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
                      <TooltipTrigger className='w-[100px] h-[50px] rounded-lg flex items-center justify-center bg-white/5 group'>
                        {/* <BsArrowUpRight className='text-2xl text-white group-hover:text-accent' /> */}
                        <span className='flex items-center justify-center text-sm text-white group-hover:text-accent'>
                          Let's Go
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Live Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/5 group'>
                        <BsGithub className='text-2xl text-white group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>github Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
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
                        <a href={project.live} target='_blank' rel=''>
                          <Image
                            src={project.image}
                            fill
                            className='object-cover object-top cursor-pointer'
                            alt='project-img'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
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
