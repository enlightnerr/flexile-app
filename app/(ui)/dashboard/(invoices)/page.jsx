import Fund from '@/app/Components/Invoices/Fund';
import PendingInvoices from '@/app/Components/Invoices/PendingInvoices';
import Profile from '@/app/Components/Invoices/Profile';
import SearchBtn from '@/app/Components/Invoices/SearchBtn';

const Invoices = () => {
  return (
    <>
      <div className="invoices-header__container mx-5 mt-8 flex items-center justify-between gap-10">
        <SearchBtn />
        <Profile />
      </div>
      <hr className="" />
      <div className=""></div>
      <div className="fund__container mx-5 mt-2 flex h-full justify-between gap-2">
        <PendingInvoices />
        <Fund />
      </div>
    </>
  );
};

export default Invoices;
