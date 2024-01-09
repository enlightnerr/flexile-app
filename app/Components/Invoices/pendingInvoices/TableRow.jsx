const TableRow = ({
  id,
  isPaid,
  name,
  billedHours,
  date,
  amount,
  checkboxHandler,
}) => {
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
};

export default TableRow;
