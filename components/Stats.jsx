'use client'
import CountUp from 'react-countup'
const stats = [
  {
    num: 3,
    text: 'Years of Experiences',
  },
  {
    num: 5,
    text: 'Projects Completed',
  },
  {
    num: 8,
    text: 'Technologies worked',
  },
  {
    num: 500,
    text: 'Code Commits',
  },
]
const Stats = () => {
  return (
    <div className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-center flex-1 xl:justify-start'
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className='mr-3 text-4xl font-extrabold xl:text-6xl'
                />
                <p
                  className={`${
                    stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Stats
