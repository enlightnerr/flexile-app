import Link from 'next/link';
import '@/app/styles/signup.css';

const Signup = () => {
  return (
    <div className="signup__container flex w-full flex-col items-center justify-center gap-4">
      <div className="heading__container">
        <h1 className="text-2xl font-semibold text-primary-main">
          Sign up to Flexile
        </h1>
      </div>
      <form
        action=""
        className="form__container flex w-full flex-col gap-5 border-2 border-primary-main p-5"
      >
        <div className="form-items__container flex flex-col gap-1">
          <label htmlFor="text" className="form__label text-primary-main">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            className="rounded border border-primary-main px-2 py-2 text-base outline-none"
          />
        </div>
        <div className="form-items__container flex flex-col gap-1">
          <label htmlFor="email" className="form__label text-primary-main">
            Business email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="rounded border border-primary-main px-2 py-2 text-base outline-none"
          />
        </div>
        <div className="form-items__container flex flex-col gap-1">
          <label htmlFor="password" className="form__label text-primary-main">
            Create password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded border border-primary-main px-2 py-2 text-base outline-none"
            placeholder="enter password"
          />
        </div>
        <div className="form-button__container flex items-center justify-between">
          <button
            type="submit"
            className="w-1/3 rounded-xl bg-secondary-main px-4 py-2 text-xl font-bold text-primary-main"
          >
            Signup
          </button>
          <div className="flex w-1/2 items-end justify-end gap-2">
            <p className="text-sm text-primary-main">
              Already have an account? <br /> Login Here...
            </p>
            <Link
              href="/login"
              className="text-lg text-primary-main hover:underline"
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
