import { Button } from '@assemble-inc/core';
import { useLocalStorage } from 'react-use';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('data-theme', 'dark');

  const handleClick = () => {
    document.documentElement.setAttribute('data-theme', theme || 'dark');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return <Button onClick={handleClick}>{`Switch to ${theme} mode`}</Button>;
};

export default ThemeSwitcher;
