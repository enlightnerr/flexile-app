import Sidebar from '@/app/Components/Sidebar/Sidebar';

const layout = ({ children }) => {
  return (
    <div className="flex h-[100vh] w-[100%] justify-between">
      <div className="w-[25%] border-r-2">
        <Sidebar />
      </div>
      <div className="flex h-[99vh] w-[75%] flex-col">{children}</div>
    </div>
  );
};

export default layout;
