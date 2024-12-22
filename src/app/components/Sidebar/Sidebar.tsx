"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SIDE_BAR } from "@/app/constanst";
import { getBasePath } from "@/app/ultil/common";
import { VscSignOut } from "react-icons/vsc";
import { LOCALSTORAGE_KEY } from "@/app/enum/common";
import { useAuth } from "@/app/provider/AppProvider";

const Sidebar = () => {
  const pathname = usePathname();
  const { setUser } = useAuth();
  const router = useRouter();

  const hanleSignOut = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(LOCALSTORAGE_KEY.REFRESH_TOKEN);
    localStorage.removeItem(LOCALSTORAGE_KEY.SESSION_EXPIRED);
    setUser(undefined);
    router.replace("/admin/login");
  };
  return (
    <aside className="row-span-2 bg-gray-800 text-white p-4 flex flex-col justify-between">
      <div>
        <div className=" flex items-start h-[80px] ">
          <div className="flex items-center gap-2 ">
            <Link
              href={"/"}
              className=" relative inline-block w-[52px] h-[52px]"
            >
              <Image src="/Logo.png" fill={true} alt={"Logo"} />
            </Link>
            <h1 className=" text-xl font-semibold text-gold font-[family-name:var(--font-dancing)] ">
              T Beauty Center
            </h1>
          </div>
        </div>
        <nav className="mt-0">
          <ul className="space-y-2">
            {SIDE_BAR.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className={
                    item.disabled
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }
                >
                  <Link
                    href={item.pathname}
                    className={`flex gap-2 items-center py-2 px-4 rounded hover:bg-gray-700 ${
                      getBasePath(pathname) === item.pathname
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
      </div>
      <div className="py-6">
        <button
          className="py-2 px-4 rounded hover:bg-gray-700 flex items-center gap-2 font-semibold w-full"
          onClick={hanleSignOut}
        >
          <VscSignOut fontSize={20} /> Sign out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
