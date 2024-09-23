import Link from 'next/link'
import { FiFacebook, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi'

const socials = [
  {
    icon: <FiFacebook />,
    path: '',
  },
  {
    icon: <FiLinkedin />,
    path: '',
  },
  {
    icon: <FiGithub />,
    path: '',
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
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
