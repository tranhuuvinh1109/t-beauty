"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SIDE_BAR } from "@/app/constanst";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="row-span-2 bg-gray-800 text-white p-4">
      <div className=" flex items-start h-[80px] ">
        <div className="flex items-center gap-2 ">
          <Link href={"/"} className=" relative inline-block w-[52px] h-[52px]">
            <Image src="/Logo.png" fill={true} alt={"Logo"} />
          </Link>
          <h1 className=" text-xl font-semibold text-gold font-[family-name:var(--font-edu)] ">
            T Beauty Center
          </h1>
        </div>
      </div>
      <nav className="mt-0">
        <ul className="space-y-2">
          {SIDE_BAR.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.pathname}
                  className={`flex gap-2 items-center py-2 px-4 rounded hover:bg-gray-700 ${
                    pathname === item.pathname
                      ? "bg-gray-700 font-semibold"
                      : ""
                  }`}
                >
                  <Icon fontSize={20} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
