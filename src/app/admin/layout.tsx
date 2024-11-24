import { HeaderAdmin, Sidebar } from "../components";
import { Edu_AU_VIC_WA_NT_Hand, Barlow } from "next/font/google";

const Edu = Edu_AU_VIC_WA_NT_Hand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-edu",
});

const Bar = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bar",
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Edu.variable} ${Bar.variable} antialiased text-text-black bg-white relative`}
      >
        <div className="grid grid-rows-[80px_1fr] grid-cols-[300px_1fr] h-screen font-[family-name:var(--font-bar)]">
          <Sidebar />
          <HeaderAdmin />

          <main className=" bg-gray-100/80 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
