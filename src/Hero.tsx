import { Select } from '@assemble-inc/core';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useState({ value: 'base-ui', label: 'Base UI' });
  const [theme, setTheme] = useState<string | undefined>();

  const getDefaultTheme = async () => await import(`@assemble-inc/${currentTheme.value}/dist/style.css`);

  useEffect(() => {
    getDefaultTheme().then(theme => {
      setTheme(theme.default);
    });
  }, []);

  const handleThemeChange = async (option: any) => {
    setCurrentTheme(option);
    const theme = await import(`@assemble-inc/${option.value}/dist/style.css`);

    setTheme(theme.default);
  };

  const heroTitle = pathname === '/' ? 'Base UI Style Guide' : 'Blueprint Style Guide';

  return (
    <div className="app-hero">
      <Helmet>
        <style key={currentTheme.value}>{theme}</style>
      </Helmet>
      <h1>{heroTitle}</h1>
      {pathname === '/' && (
        <Select
          id="theme-select"
          label="Choose a Theme"
          labelClassName="asm-label asm-label--white"
          options={[
            { value: 'base-ui', label: 'Base UI' },
            { value: 'asm-ui', label: 'ASM UI' },
            { value: 'apple-ui', label: 'Apple UI' }
          ]}
          onChange={handleThemeChange}
          value={currentTheme}
          selectedOption={currentTheme}
        />
      )}
    </div>
  );
};

export default Hero;
