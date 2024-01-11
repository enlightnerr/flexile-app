import { Poppins, Lemon } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Flexile',
  description: 'The smartest way to distribute perks to global remote teams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`}>
        {children}
        <div className="github__container fixed bottom-0 right-0 -translate-x-5 sm:hidden md:hidden">
          <button className="github-items__container flex items-end gap-2">
            <span className="text-sm text-primary-main">
              Incase you want to see the code!
            </span>
            <Link
              href="https://github.com/enlightnerr/flexile-app"
              target="_blank"
            >
              <FaGithub size={50} />
            </Link>
          </button>
        </div>
      </body>
    </html>
  );
}
