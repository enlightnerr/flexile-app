import { FaSearch } from 'react-icons/fa';

const SearchBtn = () => {
  return (
    <div className="invoices-SearchBtn__container flex w-full items-center justify-between gap-2 rounded-md border-2 border-black">
      <label htmlFor="" className="w-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search invoices, people, freelancers ..."
          className="w-full border-none bg-transparent px-2 text-lg outline-none placeholder:text-sm placeholder:text-gray-400"
        />
      </label>
      <button className="flex gap-2 rounded-r-sm rounded-br-sm bg-primary-main p-2">
        <FaSearch size={24} color="white" />
        <span className="text-lg text-white">Search</span>
      </button>
    </div>
  );
};

export default SearchBtn;
