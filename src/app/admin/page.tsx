"use client";
import { Schedule } from "../components";
import { useAuth } from "../provider/AppProvider";

const Admin = () => {
  const { user } = useAuth();
  return (
    <div>
      <Schedule />
    </div>
  );
};

export default Admin;
