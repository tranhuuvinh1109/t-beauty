"use client";

import { INVOICES } from "@/app/components/Invoice/Invoice.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiEmpty } from "react-icons/pi";

const InvoiceDetail = () => {
  const pathName = usePathname();
  const id = pathName.split("/")[3];
  const information = INVOICES.find((item) => +item.id === +id);

  return (
    <div>
      <div className="flex gap-1 text-blue-500 fixed top-0 h-[60px] items-center z-50">
        <Link className=" hover:text-blue-600 hover:underline" href={"/admin"}>
          admin
        </Link>
        /
        <Link
          className=" hover:text-blue-600 hover:underline"
          href={"/admin/invoice"}
        >
          invoice
        </Link>
        /<span className="text-black">{id}</span>
      </div>
      <div className="mt-6">
        {information ? (
          <div>
            <div className="container mx-auto p-4">
              <div className="card bg-white shadow rounded-lg">
                <div className="card-header flex justify-between items-center border-b p-4">
                  <h2 className="font-bold text-lg">Invoice</h2>
                  <div className="flex items-center space-x-2">
                    <strong>01/01/01/2018</strong>
                    <span>
                      <strong>Status:</strong> Pending
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="row mb-4 flex flex-wrap">
                    <div className="col-sm-6 w-full md:w-1/2 mb-4">
                      <h6 className="mb-3 font-semibold">From:</h6>
                      <div>
                        <strong>Webz Poland</strong>
                      </div>
                      <div>Madalinskiego 8</div>
                      <div>71-101 Szczecin, Poland</div>
                      <div>Email: info@webz.com.pl</div>
                      <div>Phone: +48 444 666 3333</div>
                    </div>
                    <div className="col-sm-6 w-full md:w-1/2">
                      <h6 className="mb-3 font-semibold">To:</h6>
                      <div>
                        <strong>Bob Mart</strong>
                      </div>
                      <div>Attn: Daniel Marek</div>
                      <div>43-190 Mikolow, Poland</div>
                      <div>Email: marek@daniel.com</div>
                      <div>Phone: +48 123 456 789</div>
                    </div>
                  </div>

                  <div className="table-responsive-sm">
                    <table className="table-auto w-full text-left border-collapse border">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2 text-center">#</th>
                          <th className="border px-4 py-2">Item</th>
                          <th className="border px-4 py-2">Description</th>
                          <th className="border px-4 py-2 text-right">
                            Unit Cost
                          </th>
                          <th className="border px-4 py-2 text-center">Qty</th>
                          <th className="border px-4 py-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: 1,
                            item: "Origin License",
                            description: "Extended License",
                            unitCost: "$999,00",
                            qty: 1,
                            total: "$999,00",
                          },
                          {
                            id: 2,
                            item: "Custom Services",
                            description:
                              "Installation and Customization (cost per hour)",
                            unitCost: "$150,00",
                            qty: 20,
                            total: "$3.000,00",
                          },
                          {
                            id: 3,
                            item: "Hosting",
                            description: "1 year subscription",
                            unitCost: "$499,00",
                            qty: 1,
                            total: "$499,00",
                          },
                          {
                            id: 4,
                            item: "Platinum Support",
                            description: "1 year subscription 24/7",
                            unitCost: "$3.999,00",
                            qty: 1,
                            total: "$3.999,00",
                          },
                        ].map((row) => (
                          <tr key={row.id}>
                            <td className="border px-4 py-2 text-center">
                              {row.id}
                            </td>
                            <td className="border px-4 py-2">{row.item}</td>
                            <td className="border px-4 py-2">
                              {row.description}
                            </td>
                            <td className="border px-4 py-2 text-right">
                              {row.unitCost}
                            </td>
                            <td className="border px-4 py-2 text-center">
                              {row.qty}
                            </td>
                            <td className="border px-4 py-2 text-right">
                              {row.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row mt-6 flex justify-end">
                    <div className="col-lg-4 col-sm-5 w-full md:w-1/2">
                      <table className="table-auto w-full text-left border-collapse border">
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-bold">
                              Subtotal
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $8.497,00
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-bold">
                              Discount (20%)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $1.699,40
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-bold">
                              VAT (10%)
                            </td>
                            <td className="border px-4 py-2 text-right">
                              $679,76
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-bold">
                              Total
                            </td>
                            <td className="border px-4 py-2 text-right font-bold">
                              $7.477,36
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <PiEmpty fontSize={36} fontWeight={700} />
            <h1>
              Invoice with ID{" "}
              <span className=" font-semibold italic">{id}</span> does not
              exist.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceDetail;
