import Link from "next/link";

import { MenuIcon, SearchIcon, UsersIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CafeITLogo } from "./cafeit-logo";
import { NavbarLink } from "./navbar-link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">
          <CafeITLogo />
        </Link>
        <NavbarLink to="/">Quienes somos</NavbarLink>
        <NavbarLink to="/jobs">Trabajos</NavbarLink>
        <Link
          passHref
          href="https://linktr.ee/cafeit"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Sumate
        </Link>
      </nav>

      <div className="flex-grow flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Busca trabajos aquí"
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-full bg-background/25"
            />
          </div>
        </form>

        <Button variant="ghost" size="icon" className="rounded-full">
          <UsersIcon />
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/">
              <CafeITLogo />
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
