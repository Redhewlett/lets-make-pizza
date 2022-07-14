import { NavLink, Link } from 'react-router-dom'
//components
import { NavBar } from './Nav.styles'
//ui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCompass, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Nav: React.FC = () => {
  return (
    <NavBar>
      <h1>
        <Link className='titleLink' to='/'>
          Let's Make Pizza
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink to='/create' className={(navData) => (navData.isActive ? 'active' : 'none')}>
            <FontAwesomeIcon icon={faCirclePlus} className='icon' />
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to='/explore' className={(navData) => (navData.isActive ? 'active' : 'none')}>
            <FontAwesomeIcon icon={faCompass} className='icon' />
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={(navData) => (navData.isActive ? 'active' : 'none')}>
            <FontAwesomeIcon icon={faCircleInfo} className='icon' />
            About
          </NavLink>
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav
