"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseWithDelay = () => {
    setTimeout(() => setIsOpen(false), 500); // 500ms delay before closing
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Hidden title for removing warning */}
        <SheetTitle className="sr-only">Navigation Bar</SheetTitle>

        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/" onClick={handleCloseWithDelay}>
            <h1 className="text-4xl font-semibold">
              Moxit<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleCloseWithDelay} // Close navbar with delay
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
