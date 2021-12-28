import socialStyles from '../styles/Social.module.css'
import Link from 'next/link'

const SocialMedia = () => (
  <ul className={socialStyles.links}>
    <li>
      <Link>PINTEREST</Link>
    </li>
    <li>
      <Link>TWITTER</Link>
    </li>
    <li>
      <Link>FACEBOOK</Link>
    </li>
    <li>
      <Link>INSTAGRAM</Link>
    </li>
  </ul>
)

export default SocialMedia
