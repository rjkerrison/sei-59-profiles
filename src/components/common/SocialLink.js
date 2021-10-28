import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = ({ username, icon, baseUrl, name }) => {
  return (
    <span>
      <a href={`${baseUrl}/${username}`}>{username}</a> on {name}{' '}
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}

export default SocialLink
