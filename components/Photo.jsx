'use client'
import Image from 'next/image'
import { delay, motion } from 'framer-motion'
const Photo = () => {
  return (
    <div className='relative w-full h-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
        >
          <div className='h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten'>
            <Image
              src='/assets/photo.png'
              priority
              quality={100}
              fill
              className='object-contain'
              alt='My photo'
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
