import { Navbar } from "@/components/layout/navbar";
import { LayoutProps } from "@/types";

export default function SiteLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-zinc-950 to-[#000814]">
      <Navbar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
