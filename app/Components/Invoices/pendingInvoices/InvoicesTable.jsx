import TableRow from './TableRow';

const InvoicesTable = ({ invoiceData, checkboxHandler }) => {
  return (
    <table className="table__contractors w-full border-separate border-spacing-4 rounded-md border-2 border-primary-main">
      <thead className="">
        <tr className="font-semibold">
          <td>Contractor</td>
          <td>Billed Hours</td>
          <td>Sent on</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        {invoiceData.map((invoice) => {
          const { id, name, billedHours, date, amount, isPaid } = invoice;
          return (
            <tr key={id}>
              <td>
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    name={name}
                    id={id}
                    checked={isPaid}
                    onChange={() => {
                      checkboxHandler(id);
                    }}
                  />
                  <h1>{name}</h1>
                </div>
              </td>
              <td>{billedHours}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>
                <button className="w-full rounded-md bg-green-400 px-2 py-1 text-lg">
                  Pay
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvoicesTable;
