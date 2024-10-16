"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/shadcn";

interface Props {
  to: string;
  children: React.ReactNode;
}

export function NavbarLink({ to, children }: Props) {
  const pathname = usePathname();
  const isActive = to === pathname;

  return (
    <Link
      href={to}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        { "text-foreground": isActive }
      )}
    >
      {children}
    </Link>
  );
}
