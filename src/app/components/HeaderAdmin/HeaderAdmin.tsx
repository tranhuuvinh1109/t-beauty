import { GoBell } from "react-icons/go";

const HeaderAdmin = () => {
  return (
    <div className=" border-b p-4 flex items-center">
      <div className="flex justify-end flex-1">
        <GoBell fontSize={26} fontWeight={700} />
      </div>
    </div>
  );
};

export default HeaderAdmin;
