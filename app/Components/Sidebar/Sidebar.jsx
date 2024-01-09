'use client';
import { sidebarLinks } from '@/app/data/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { darkLogo, lightLogo } from '@/app/data/exports';
import { usePathname } from 'next/navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col">
      <nav className="sidebar__nav-container mt-8 flex h-full w-full flex-col gap-5">
        <div className="brand__container w-full">
          <Image src={darkLogo} alt="" height={90} className="pl-10" />
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
      <div className="sidebarBtn__container flex items-center justify-between gap-5 px-10">
        <div className="logout__container">
          <button className="">
            <MdDarkMode size={50} />
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
    </section>
  );
};

export default Sidebar;
