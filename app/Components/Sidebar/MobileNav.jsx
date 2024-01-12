import { darkLogo } from '@/app/data/exports';
import { sidebarLinks } from '@/app/data/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { SiGumroad } from 'react-icons/si';

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  function handleMobileNav() {
    setIsNavOpen((prev) => {
      return !prev;
    });
  }

  return (
    <div className="mobile_container flex h-full w-full flex-col">
      <nav className="mobile_nav-container mb-10 mt-8 flex h-full w-full flex-col gap-5">
        <div className="brand__container flex w-full items-center justify-between">
          <Image src={darkLogo} alt="" className="sm: w-1/2" />
          <IoArrowBackCircleSharp size={40} onClick={handleMobileNav} />
        </div>
        <div
          className={`${
            isNavOpen
              ? `navOpen absolute top-[15%] z-50 h-max w-full border-2 border-primary-main 
               bg-white`
              : `navClose mt-5 flex w-full flex-col`
          }`}
        >
          {sidebarLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.address}
                className={`mobile_link flex items-center gap-2 p-5 px-10 text-xl font-semibold text-primary-main
            ${link.address === pathname ? 'bg-secondary-main' : 'opacity-30'}`}
              >
                {link.icon}
                {link.title}
              </Link>
            );
          })}
          <div className="sidebarBtn__container mb-2 flex items-center justify-between gap-5 px-10">
            <div className="logout__container">
              {/* <button className="">
            <MdDarkMode size={50} />
          </button> */}
              <button className="flex items-center gap-2 font-semibold">
                <SiGumroad size={30} />
                Gumroad
              </button>
            </div>
            <div className="logout__container">
              <button>
                <span className="flex items-center gap-2 rounded-full border bg-gray-200 px-2 py-1 text-lg font-semibold">
                  <BiLogOutCircle size={30} /> Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
