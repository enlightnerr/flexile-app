'use client';
import { sidebarLinks } from '@/app/data/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { darkLogo, lightLogo } from '@/app/data/exports';
import { usePathname } from 'next/navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import { SiGumroad } from 'react-icons/si';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar__container flex h-full w-full flex-col">
      <nav className="sidebar__nav-container mt-8 flex h-full w-full flex-col gap-5">
        <div className="brand__container flex w-full items-center justify-between">
          <Image src={darkLogo} alt="" className="sm: w-1/2 pl-10" />
          <IoArrowBackCircleSharp size={40} />
        </div>
        <div className="mt-5 flex w-full flex-col">
          {sidebarLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.address}
                className={`sidebar__link flex items-center gap-2 py-5 pl-10 text-xl font-semibold text-primary-main
            ${link.address === pathname ? 'bg-secondary-main' : 'opacity-30'}`}
              >
                {link.icon}
                {link.title}
              </Link>
            );
          })}
        </div>
      </nav>
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
  );
};

export default Sidebar;
