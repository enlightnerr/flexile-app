'use client';

import { useState } from 'react';
import { usersData } from '@/app/data/usersData';

const PendingInvoices = () => {
  const [invoices, setInvoices] = useState(usersData);

  function checkboxHandler(id) {
    setInvoices((prevState) => {
      return prevState.map((invoice) => {
        if (invoice.id === id) {
          return { ...invoice, isPaid: !invoice.isPaid };
        } else {
          return invoice;
        }
      });
    });
  }

  return (
    <div className="pending-invoices__container w-full">
      <div className="heading__container flex items-center justify-between py-2">
        <h1 className="text-2xl font-semibold">Pending Invoices</h1>
        <button className="rounded-lg bg-green-400 p-2 font-semibold">
          Approve All
        </button>
      </div>
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
          {invoices.map((invoice) => {
            const { id, name, billedHours, date, amount, isPaid } = invoice;
            return (
              <tr key={invoice.id}>
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
    </div>
  );
};

export default PendingInvoices;
