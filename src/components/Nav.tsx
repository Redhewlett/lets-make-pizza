import { NavBar } from './Nav.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCompass, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Nav: React.FC = () => {
  return (
    <NavBar>
      <h1>Let's Make Pizza</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCirclePlus} className='icon' />
          Create
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} className='icon' />
          Explore
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleInfo} className='icon' />
          About
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav
