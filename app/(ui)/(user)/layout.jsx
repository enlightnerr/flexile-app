import { darkLogo, logoIcon } from '@/app/data/exports';
import '@/app/styles/login.css';
import Image from 'next/image';

const layout = ({ children }) => {
  return (
    <div className="user__container relative flex h-[75%] min-h-[100vh] items-center justify-evenly">
      <div className="logo__container fixed left-[20%] z-[-100] opacity-5">
        <Image src={logoIcon} alt="background logo" height={700} />
      </div>
      <div className="hero__container">
        <Image src={darkLogo} alt="white logo" className="w-[500px]" />
        <p className="mt-5 text-lg italic text-primary-main">
          Built for a generation of founders looking to rewrite the rules.
        </p>
      </div>
      <div className="children__container w-1/2">{children}</div>
    </div>
  );
};

export default layout;
