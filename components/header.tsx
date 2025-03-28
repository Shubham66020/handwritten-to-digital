"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { setTheme, theme } = useTheme();

  const NavLinks = () => (
    <>
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="/convert" className="hover:text-primary transition-colors">
        Convert
      </Link>
      <Link href="/history" className="hover:text-primary transition-colors">
        History
      </Link>
      <Link href="/pricing" className="hover:text-primary transition-colors">
        Pricing
      </Link>
      <Link href="/dasboard" className="hover:text-primary transition-colors">
        Dashboard
      </Link>
    </>
  );

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Scribble<span className="text-primary">2</span>Text
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 md:h-10 md:w-10"
            >
              <SunIcon className="h-4 w-4 md:h-5 md:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-4 w-4 md:h-5 md:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLinks />
                  <div className="mt-4">
                    <Button asChild className="w-full">
                      <Link href="/login">Sign In</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Sign In Button */}
            <Button asChild className="hidden md:flex">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}