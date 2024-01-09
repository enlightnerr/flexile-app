import Link from 'next/link';

const Login = () => {
  return (
    <div className="login__container flex w-1/2 items-center justify-center">
      <form
        action=""
        className="form__container flex w-full flex-col gap-5 border-2 border-primary-main p-5 text-xl "
      >
        <label htmlFor="email" className="text-white">
          Business Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
          className="border-none px-2 py-2 text-base outline-none"
        />
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-none px-2 py-2 text-base outline-none"
          placeholder="enter password"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-1/3 rounded-xl bg-secondary-soft px-4 py-2 text-xl font-bold"
          >
            Login
          </button>
          <Link
            href="/signup"
            className="border px-2 py-1 text-base text-secondary-soft"
          >
            Create your account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
