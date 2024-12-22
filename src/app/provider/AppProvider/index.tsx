"use client";
import { UserType } from "@/app/api/auth/auth.type";
import { Loading, Modal } from "@/app/components";
import { useRouter } from "next/navigation";
import { TiWarningOutline } from "react-icons/ti";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetMyProfile } from "@/app/api/auth";
import { toast } from "react-toastify";

type AppProviderType = {
  user?: UserType;
  setUser: Dispatch<SetStateAction<UserType | undefined>>;
  isUserEmpty: boolean;
  setIsUserEmpty: Dispatch<SetStateAction<boolean>>;
};

const APP_CONTEXT = createContext<AppProviderType>({
  user: undefined,
  setUser: () => {},
  isUserEmpty: false,
  setIsUserEmpty: () => {},
});

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserType>();
  const [isUserEmpty, setIsUserEmpty] = useState(false);
  const router = useRouter();

  const { mutate, data, error, isPending } = useGetMyProfile();

  const handleClose = () => {
    // setIsUserEmpty(false);
  };

  const handleClick = () => {
    router.push("/admin/login");
  };

  useEffect(() => {
    if (error) {
      toast.error("Error getting user information");
      return;
    }
    if (data) {
      setUser(data);
      // setIsUserEmpty(false);
      return;
    }
  }, [data, error]);

  useEffect(() => {
    if (!user) {
      // setIsUserEmpty(true);
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        mutate();
      }
      return;
    }
    setIsUserEmpty(false);
  }, [mutate, user]);

  return (
    <APP_CONTEXT.Provider
      value={{ user, setUser, isUserEmpty, setIsUserEmpty }}
    >
      <Modal isOpen={isUserEmpty} handleClose={handleClose} isHaveClose={false}>
        <div className="font-[family-name:var(--font-bar)]">
          <div className="flex justify-center items-center py-6">
            <TiWarningOutline fontSize={40} />
          </div>
          <h1 className="text-xl font-semibold text-center">
            Session expired!
          </h1>
          <p className="text-center">
            Please log in again to continue using the application.
          </p>
          <button
            className="w-full bg-gold-hover font-semibold text-center rounded-lg py-2 mt-6 text-white hover:bg-gold"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </Modal>
      {children}
      <Loading isLoading={isPending} />
    </APP_CONTEXT.Provider>
  );
};

export default AppProvider;

export const useAuth = () => {
  const context = useContext(APP_CONTEXT);
  return {
    user: context.user,
    setUser: context.setUser,
    isUserEmpty: context.isUserEmpty,
    setIsUserEmpty: context.setIsUserEmpty,
  };
};
