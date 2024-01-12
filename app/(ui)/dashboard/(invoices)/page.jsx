import Fund from '@/app/Components/Invoices/Fund';
import PendingInvoices from '@/app/Components/Invoices/pendingInvoices/PendingInvoices';
import Profile from '@/app/Components/Invoices/Profile';
import SearchBtn from '@/app/Components/Invoices/SearchBtn';

const Invoices = () => {
  return (
    <div className="invoices__container mx-5 mt-8 ">
      <div className="invoices-header__container flex items-center justify-between gap-10">
        <SearchBtn />
        <Profile />
      </div>
      <hr className="" />
      <div className="invoices-hero__container mx-5 mt-2 flex items-center justify-between gap-2">
        <PendingInvoices />
        <Fund />
      </div>
    </div>
  );
};

export default Invoices;
