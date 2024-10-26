'use client'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiVuedotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
// about data
const aboutData = {
  title: 'About Me',
  description:
    'I am a skilled full-stack developer with over 3 years of experience in web development, specializing in HTML, CSS, JavaScript, Express, Node.js, Vue, React, Next.js. With a strong educational foundation, including an MSc from Comilla University and advanced training in full-stack development from Coders Trust, bring expertise and dedication to building efficient and user-friendly applications.',
  info: [
    {
      fieldName: 'Name',
      value: 'MD. Jahir Hasan',
    },
    {
      fieldName: 'Phone',
      value: '+88 01851171505',
    },
    {
      fieldName: 'Email',
      value: 'hasanjahir30@gmail.com',
    },
    {
      fieldName: 'Experience',
      value: '3+ Years',
    },
    {
      fieldName: 'Nationlaty',
      value: 'Bangladeshi',
    },
    {
      fieldName: 'Language',
      value: 'English, Bengali',
    },
    {
      fieldName: 'Freelance',
      value: 'Available',
    },
  ],
}

// experience data
const experiences = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experiences',
  description:
    'With over 3 years of experience as a full-stack developer. My work spans both front-end and back-end development, delivering seamless, dynamic, and user-friendly experiences from concept to deployment. I have created APIs for the POS system, product management system, product transaction system, report system and working on creating APIs for the account system of the company.',
  items: [
    {
      company: 'Amana Group LTD',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Amana Group LTD',
      position: 'Junior Full Stack Developer',
      duration: '2021 - 2022',
    },
    {
      company: '',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
  ],
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'My educational qualifications are described below.',
  items: [
    {
      institution: 'Comilla University',
      degree: 'MSc',
      duration: '2020 - 2021',
    },
    {
      institution: 'Coders Trust',
      degree: 'Full Stack Web Development Course',
      duration: '2017',
    },
    {
      institution: 'Comilla University',
      degree: 'BSc',
      duration: '2013 - 2016',
    },
    {
      institution: 'Dhaka City College',
      degree: 'HSC',
      duration: '2011 - 2012',
    },
  ],
}
// skill data
const skills = {
  title: 'My Skills',
  description:
    'I specialize in building robust web applications using HTML, CSS, JavaScript, Express, Node.js, Vue, React, and Next.js, bootstrap, tailwind.',
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <FaBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiVuedotjs />,
      name: 'Vue.js',
    },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] py-12 xl:py-0 flex justify-center'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col justify-start w-full max-w-[300px] mx-auto xl:mx-0'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{experiences.title}</h3>
                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>
                  {experiences.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {item.company && (
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            )}
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {item.institution && (
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            )}
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center md:text-left'>
                  <h3 className='text-3xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto md:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillLists.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                              <div className='text-6xl transition-all duration-300 group-hover:text-accent'>
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className='capitalize'>
                              {item.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-3xl font-bold'>{aboutData.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {aboutData.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[720px] mx-auto xl:mx-0'>
                  {aboutData.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center gap-4 xl:justify-start'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.value}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
