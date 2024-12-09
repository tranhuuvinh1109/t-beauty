"use client";

import { CUSTOMERS } from "@/app/components/CustomerTable/CustomerTable.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiEmpty } from "react-icons/pi";

const CustomerDetail = () => {
  const pathName = usePathname();
  const id = pathName.split("/")[3];
  const information = CUSTOMERS.find((item) => +item.id === +id);

  return (
    <div>
      <div className="flex gap-1 text-blue-500 fixed top-0 h-[60px] items-center z-50">
        <Link className=" hover:text-blue-600 hover:underline" href={"/admin"}>
          admin
        </Link>
        /
        <Link
          className=" hover:text-blue-600 hover:underline"
          href={"/admin/customer"}
        >
          customer
        </Link>
        /<span className="text-black">{id}</span>
      </div>
      <div className="mt-6">
        {information ? (
          <div className="flex justify-between gap-6">
            <div className="w-1/4 rounded-xl bg-white"></div>
            <div className="flex-1 bg-red-400">aa</div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <PiEmpty fontSize={36} fontWeight={700} />
            <h1>
              Customer with ID{" "}
              <span className=" font-semibold italic">{id}</span> does not
              exist.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetail;
