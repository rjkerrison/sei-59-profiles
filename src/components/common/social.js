import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import SocialLink from './SocialLink'

export const GitHub = ({ username }) => {
  const props = {
    name: 'GitHub',
    baseUrl: 'https://github.com',
    icon: faGithub,
    username,
  }

  return <SocialLink {...props} />
}

export const Twitter = ({ username }) => {
  const props = {
    name: 'Twitter',
    baseUrl: 'https://twitter.com',
    icon: faTwitter,
    username,
  }

  return <SocialLink {...props} />
}
