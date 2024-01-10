import Link from 'next/link';

const Login = () => {
  return (
    <div className="login__container flex w-1/2 flex-col items-center justify-center gap-4">
      <div className="">
        <h1 className="text-2xl font-semibold text-primary-main">
          Login to flexile
        </h1>
      </div>
      <form
        action=""
        className="form__container flex w-full flex-col gap-5 border-2 border-primary-main p-5"
      >
        <label htmlFor="email" className="text-primary-main">
          Business Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
          className="border border-primary-main px-2 py-2 text-base outline-none"
        />
        <label htmlFor="password" className="text-primary-main">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-primary-main px-2 py-2 text-base outline-none"
          placeholder="enter password"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-1/3 rounded-xl bg-secondary-main px-4 py-2 text-xl font-bold"
          >
            Login
          </button>
          <Link
            href="/signup"
            className=" border border-secondary-main px-2 py-1 text-base text-primary-main"
          >
            Create your account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
