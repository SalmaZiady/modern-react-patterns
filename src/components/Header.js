import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
    <div className='logo'> Ministry of Javascript- React </div>
    <ul className='nav'>
      <li> <Link to ="/"> Home </Link> </li>
      <li> <Link to ="/about"> About </Link> </li>
      <li> <Link to ="/contact"> Contact </Link></li>
    </ul>



    </div>
  )
}

export default Header