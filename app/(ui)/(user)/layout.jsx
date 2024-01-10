import { darkLogo, logoIcon } from '@/app/data/exports';

import Image from 'next/image';

const layout = ({ children }) => {
  return (
    <div className="relative flex h-[75%] min-h-[100vh] items-center justify-evenly">
      <div className="fixed left-[20%] z-[-100] opacity-5">
        <Image src={logoIcon} alt="background logo" height={700} />
      </div>
      <div className="">
        <Image src={darkLogo} alt="white logo" className="w-[500px]" />
        <p className="mt-5 text-lg italic text-primary-main">
          Built for a generation of founders looking to rewrite the rules.
        </p>
      </div>
      {children}
    </div>
  );
};

export default layout;
