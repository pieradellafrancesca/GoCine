import { NavLink } from 'react-router-dom';
import scss from './index.module.scss';

const Navbar = () => {
  return (
    <nav className={`${scss.Navbar} flex justify-content-center`}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/info"
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        Info
      </NavLink>
      <NavLink
        to="/authentication"
        className={({ isActive }) => (isActive ? 'active' : 'link')}
      >
        Auth
      </NavLink>
    </nav>
  );
};

export default Navbar;
