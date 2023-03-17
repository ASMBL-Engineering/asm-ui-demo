import { useLocation } from 'react-router-dom';

const Hero = () => {
  const { pathname } = useLocation();

  const heroTitle = pathname === '/' ? 'Base UI Style Guide' : 'Blueprint Style Guide';
  return (
    <div className="app-hero">
      <h1>{heroTitle}</h1>
    </div>
  );
};

export default Hero;
