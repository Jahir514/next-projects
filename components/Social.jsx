import Link from 'next/link'
import { FiFacebook, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi'

const socials = [
  {
    icon: <FiFacebook />,
    path: 'https://www.facebook.com/jahir.shohag.50',
  },
  {
    icon: <FiLinkedin />,
    path: 'https://www.linkedin.com/in/jahir-hasan-91b02b128/',
  },
  {
    icon: <FiGithub />,
    path: 'https://github.com/Jahir514',
  },
  {
    icon: <FiYoutube />,
    path: '',
  },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            key={index}
            className={iconStyles}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
