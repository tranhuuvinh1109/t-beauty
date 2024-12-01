import { HeaderAdmin, Sidebar } from "../components";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` antialiased text-text-black bg-white relative`}>
      <div className="grid grid-rows-[60px_1fr] grid-cols-[300px_1fr] h-screen font-[family-name:var(--font-bar)]">
        <Sidebar />
        <HeaderAdmin />
        <main className="relative bg-gray-2 00/80 px-6 py-2 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
