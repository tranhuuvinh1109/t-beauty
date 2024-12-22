"use client";
import { DEFAULT_AVATAR } from "@/app/constanst";
import { useAuth } from "@/app/provider/AppProvider";
import Image from "next/image";
import { GoBell } from "react-icons/go";

const HeaderAdmin = () => {
  const { user } = useAuth();
  return (
    <div className=" border-b p-4 flex items-center">
      <div className="flex justify-between flex-1">
        {user && (
          <div className="flex items-center gap-2">
            <Image
              src={user.avatar || DEFAULT_AVATAR}
              alt="avatar"
              width={36}
              height={36}
              className=" rounded-full"
            />
            <span>Welcome, {user.username}</span>
          </div>
        )}

        <GoBell fontSize={26} fontWeight={700} />
      </div>
    </div>
  );
};

export default HeaderAdmin;
