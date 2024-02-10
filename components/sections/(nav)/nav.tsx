"use client";

import { MainNav } from "@/components/sections/(nav)/main-nav";
import ViewContainer from "@/components/layout/view-container";
import UserNav from "./user-nav";
import { currentUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const mainNavLink = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const userNavLink = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
];

export default async function Navbar() {
  return (
    <ViewContainer className="px-4">
      <div className="flex h-16 items-center px-4">
        <p className="text-2xl font-semibold">rooteen.</p>
        <MainNav className="mx-6" links={mainNavLink} />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </ViewContainer>
  );
}

