import Link from 'next/link';

const Signup = () => {
  return (
    <div className="singup__container flex w-1/2 flex-col items-center justify-center">
      <div className="">
        <h1 className="text-2xl text-white">Sign up to Flexile</h1>
      </div>
      <form
        action=""
        className="form__container flex w-full flex-col gap-5 border-2 border-primary-main p-5 text-base"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="text" className="text-white">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            className="rounded border-none px-2 py-2 text-base outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white">
            Business email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="rounded border-none px-2 py-2 text-base outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-white">
            Create password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded border-none px-2 py-2 text-base outline-none"
            placeholder="enter password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-1/3 rounded-xl bg-secondary-soft px-4 py-2 text-xl font-bold text-primary-main"
          >
            Signup
          </button>
          <div className="flex w-1/2 items-center justify-between">
            <p className="text-sm text-white">
              Already have an account? Login Here...
            </p>
            <Link
              href="/login"
              className="border border-white px-2 py-1 text-base italic text-secondary-soft"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
