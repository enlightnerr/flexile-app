'use client';

import { usersData } from '@/app/data/usersData';
import { useState } from 'react';

const PendingInvoices = () => {
  const [isChecked, setIsChecked] = useState(false);
  function checkboxHandler(id) {
    setIsChecked(() => {
      usersData.map((user) => {
        if (user.id === id) {
          return { ...user, isPaid: !user.isPaid };
        } else {
          return { user };
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
          {usersData.map((user) => {
            const { id } = user;
            return (
              <tr key={user.id}>
                <td>
                  <div className="flex gap-5">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      name={user.name}
                      id={user.id}
                      checked={isChecked}
                      onChange={() => {
                        checkboxHandler(id);
                      }}
                    />
                    <h1>{user.name}</h1>
                  </div>
                </td>
                <td>{user.billedHours}</td>
                <td>{user.date}</td>
                <td>{user.amount}</td>
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
