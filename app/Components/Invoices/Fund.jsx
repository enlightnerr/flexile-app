const Fund = () => {
  return (
    <div className="fund__container flex h-full w-1/4 flex-col justify-center gap-5 text-2xl font-semibold">
      <div
        className="balance-amount__container flex h-1/6 flex-col items-center justify-center gap-2 rounded-md
        border-2 border-primary-main bg-secondary-soft"
      >
        <h1>Balance</h1>
        <h3 className="text-2xl">$ 100,000</h3>
      </div>
      <div className="pending-amount__container flex h-1/6  flex-col items-center justify-center gap-2 rounded-md border-2 border-secondary-soft">
        <h1>Pending</h1>
        <h3>$ 75,000</h3>
      </div>
      <div className="cards__container flex h-1/6 flex-col items-center justify-center gap-2 rounded-md border-2 border-secondary-main">
        <h1>Pay</h1>
        <h3>$ 25,000</h3>
      </div>
    </div>
  );
};

export default Fund;
