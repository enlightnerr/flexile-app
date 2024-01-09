import Image from 'next/image';
import logo_white from '@/public/assest/flexile-icon-white.svg';

const layout = ({ children }) => {
  return (
    <div className="flex min-h-[90vh] items-center justify-evenly">
      <div className="">
        <Image src={logo_white} alt="white logo" className="w-[500px]" />
        <p className=" mt-5 italic text-secondary-soft">
          Built for a generation of founders looking to rewrite the rules.
        </p>
      </div>
      {children}
    </div>
  );
};

export default layout;
