"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CustomProvider>
        {children}
        <ToastContainer />
      </CustomProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
