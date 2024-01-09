import { darkLogo } from '@/app/data/exports';
import Image from 'next/image';

const layout = ({ children }) => {
  return (
    <div className="flex min-h-[90vh] items-center justify-evenly">
      <div className="">
        <Image src={darkLogo} alt="white logo" className="w-[500px]" />
        <p className=" mt-5 italic text-secondary-soft">
          Built for a generation of founders looking to rewrite the rules.
        </p>
      </div>
      {children}
    </div>
  );
};

export default layout;
