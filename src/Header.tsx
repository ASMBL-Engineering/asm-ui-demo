import ThemeSwitcher from './ThemeSwitcher';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@assemble-inc/core';

type HeaderProps = {
  changeStyles: (style: string) => void;
}
const Header = ({ changeStyles }: HeaderProps) => {
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
      <Button onClick={() => changeStyles('./node_modules/@assemble-inc/base-ui/dist/style.css')}>Base Styles</Button>
      <Button onClick={() => changeStyles('./node_modules/@assemble-inc/asm-ui/dist/style.scss')}>Assemble Styles</Button>
      <Button onClick={() => changeStyles('./node_modules/@assemble-inc/apple-ui/dist/style.scss')}>Apple Styles</Button>
      <ThemeSwitcher disabled={pathname === '/blueprint'} />
    </header>
  );
};

export default Header;
