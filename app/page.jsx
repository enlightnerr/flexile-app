import { Lemon } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { arrow, curvedArrow, logoIcon } from './data/exports';

const lemon = Lemon({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <main className="relative flex h-[100vh] w-full items-center justify-evenly">
      <div className="header__container relative flex flex-col gap-2">
        <div className="fixed left-[50%] top-1 z-[-1] -translate-x-[50%] transform opacity-5">
          <Image src={logoIcon} alt="background logo" height={700} />
        </div>
        <h1 className={`${lemon.className} text-[5rem] text-primary-main`}>
          Hey Sahil!
        </h1>
        <h3 className="text-2xl font-semibold text-primary-main">
          Maybe you are visiting this page!
        </h3>
      </div>
      <div className="flex flex-col gap-5 rounded-lg border-2 border-secondary-main p-5">
        <h1 className="text-[2.5rem] font-bold">
          The app is still in development
        </h1>
        <div className="list__container min-w-3/4 flex flex-col gap-2 text-primary-main">
          <p className="text-2xl font-semibold">Few pages I worked on</p>
          <ol className="list-items flex flex-col gap-5 text-2xl font-semibold">
            <li className="list-item w-fit   rounded-lg bg-secondary-main px-4 py-1">
              <Link href="/login">Login</Link>
            </li>
            <li className="list-item w-fit   rounded-lg bg-secondary-main px-4 py-1">
              <Link href="/signup">Signup</Link>
            </li>
            <li className="list-item w-fit rounded-lg  bg-secondary-main  px-4 py-1">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ol>
          <p className="">
            I tried to keep everything minimal and used Next js App router and
            React core fundamentals.
          </p>
        </div>
      </div>
    </main>
  );
}
