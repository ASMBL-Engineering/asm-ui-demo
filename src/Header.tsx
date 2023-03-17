import ThemeSwitcher from './ThemeSwitcher';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Core UI</Link>
          </li>
          <li>
            <Link to="/blueprint">Blueprint</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher disabled={pathname === '/blueprint'} />
    </header>
  );
};

export default Header;
