import headerStyles from '../styles/Header.module.css'
import Link from 'next/link'
const Header = () => (
    <ul className={headerStyles.header}>
      <li>
        <a>
          <Link href={'/'}>HOME</Link>
          <span className={headerStyles.chevronBottom}></span>
        </a>
      </li>
      <li>
        <a>
          <Link href={'/'}>PAGES</Link>
          <span className={headerStyles.chevronBottom}></span>
        </a>
      </li>
      <li>
        <a>
          <Link href={'/'}>SERVICES</Link>
          <span className={headerStyles.chevronBottom}></span>
        </a>
      </li>
      <li>
        <a>
          <Link href={'/'}>PORTFOLIO</Link>
          <span className={headerStyles.chevronBottom}></span>
        </a>
      </li>
      <li>
        <Link href={'/'}>
          <a>
            BLOG
            <span className={headerStyles.chevronBottom}></span>
          </a>
          </Link>
      </li>
      <li>
        <Link href={'/'}>CONTACTS</Link>
      </li>
    </ul>
)

export default Header
