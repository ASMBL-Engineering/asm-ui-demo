import { Select } from '@assemble-inc/core';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeadProvider, Link, Style } from 'react-head';

const Hero = () => {
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useState({ value: 'base-ui', label: 'Base UI' });
  const [theme, setTheme] = useState<string | undefined>();

  // const getDefaultTheme = async () => await import(`@assemble-inc/${currentTheme.value}/dist/style.css`);

  useEffect(() => {
    handleThemeChange({ value: 'base-ui', label: 'Base UI' });
    // getDefaultTheme().then(theme => {
    //   setTheme(theme.default);
    // });
  }, []);

  const handleThemeChange = async (option: any) => {
    if (currentTheme.value === option.value) return;

    setCurrentTheme(option);

    const newTheme = await import(`@assemble-inc/${option.value}/dist/style.css`);

    // for (var i = 0, max = stylesheets.length; i < max; i++) {
    //   if (stylesheets[i]) {
    //     stylesheets[i].parentNode.removeChild(stylesheets[i]);
    //   }
    // }

    var stylesheets: any = [...document.getElementsByTagName('style')];
    console.log('stylesheets: ', stylesheets);

    const last = stylesheets[stylesheets.length - 1];
    last.remove();

    setTheme(newTheme.default);
  };

  const heroTitle = pathname === '/' ? 'Base UI Style Guide' : 'Blueprint Style Guide';

  return (
    <div className="app-hero">
      <HeadProvider>
        <Style id="steez">{theme}</Style>
      </HeadProvider>
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
