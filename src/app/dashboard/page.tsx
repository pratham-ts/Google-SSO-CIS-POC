/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { getClientsList as getClientsListApi } from "../admin/admin";

const Page = () => {
  const [clientsList, setClientsList] = useState<Array<any> | undefined>(
    undefined
  );

  const getClientsList = async () => {
    const clientsList = await getClientsListApi();
    setClientsList(clientsList);
  };
  useEffect(() => {
    getClientsList();
  }, []);

  return (
    <div className="mx-auto max-w-full x-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">Clients List</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40">
            <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
              CSV
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-blue-600 text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3 text-center">Logo</th>
                <th className="px-5 py-3 text-center">Company Name</th>
                <th className="px-5 py-3 text-center">Contact Name</th>
                <th className="px-5 py-3 text-center">Contact Email</th>
                <th className="px-5 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {clientsList &&
                clientsList.slice(1, 10).map((client, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <img
                        className="mx-auto h-[10%] w-[100px]"
                        src={`https://stg.castit.biz/media/cis/logo/${client.clientId}-logo.gif`}
                        alt=""
                      />
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <div className="flex items-center justify-center">
                        <p className="whitespace-no-wrap">{client.company}</p>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">
                        {client.contactName ? client.contactName : "-"}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <p className="whitespace-no-wrap">
                        {client.contactEmail ? client.contactEmail : "-"}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm text-center">
                      <button className="mx-auto bg-blue-700 px-3 py-1 text-xs font-semibold text-white rounded-md h-8">
                        Impersonate User
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">
            Showing 1 to 5 of 12 Entries
          </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Prev
            </button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
