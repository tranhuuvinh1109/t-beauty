"use client";

import { useSignIn } from "@/app/api/auth";
import { Loading } from "@/app/components";
import { LOCALSTORAGE_KEY } from "@/app/enum/common";
import { useAuth } from "@/app/provider/AppProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { setIsUserEmpty, isUserEmpty, setUser, user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { mutate, isPending, data, error } = useSignIn();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please enter your email address and password");
      return;
    }
    mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  useEffect(() => {
    if (isUserEmpty) {
      setIsUserEmpty(false);
    }
    return;
  }, [isUserEmpty, setIsUserEmpty]);

  useEffect(() => {
    if (user) {
      router.push("/admin");
      return;
    }
    if (error) {
      toast.error("Email or password incorrect. Please try again");
      return;
    }
    if (data) {
      setUser(data.user);
      localStorage.setItem(LOCALSTORAGE_KEY.ACCESS_TOKEN, data.accessToken);
      localStorage.setItem(LOCALSTORAGE_KEY.REFRESH_TOKEN, data.refreshToken);
      toast.success("Login successful");
      router.push("/admin");
      return;
    }
  }, [data, setUser, router, error, user]);

  return (
    <>
      <div className="fixed flex justify-center items-center bg-white top-0 bottom-0 left-0 right-0 text-black">
        <div className="w-[800px]  bg-slate-100 py-10 rounded-lg shadow-2xl ">
          <div className="flex justify-center">
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/Logo.png"
                fill={true}
                alt={"Logo"}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-2/3 mx-auto">
              <div className="flex items-center">
                <label htmlFor="email" className="font-semibold w-[100px]">
                  Email:
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg flex-1"
                />
              </div>
              <div className="flex items-center mt-4">
                <label htmlFor="password" className="font-semibold w-[100px]">
                  Password:
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg flex-1"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-gold py-2 rounded-lg font-semibold text-white hover:bg-gold-hover"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loading isLoading={isPending} />
    </>
  );
};

export default LoginPage;
