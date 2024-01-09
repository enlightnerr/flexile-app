import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';

export const sidebarLinks = [
  {
    id: 1,
    title: 'Invoices',
    address: '/dashboard',
    icon: <FaIcons.FaFileInvoiceDollar />,
  },
  {
    id: 2,
    title: 'People',
    address: '/dashboard/people',
    icon: <IoIcons.IoIosPeople />,
  },
  {
    id: 3,
    title: 'Documents',
    address: '/dashboard/documents',
    icon: <IoIcons.IoMdDocument />,
  },
  {
    id: 4,
    title: 'Equity',
    address: '/dashboard/equity',
    icon: <RiIcons.RiPieChartFill />,
  },
  {
    id: 5,
    title: 'Analytics',
    address: '/dashboard/analytics',
    icon: <TbIcons.TbFileAnalytics />,
  },
  {
    id: 6,
    title: 'Settings',
    address: '/dashboard/settings',
    icon: <IoIcons.IoIosSettings />,
  },
];
