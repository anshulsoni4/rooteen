import Link from "next/link";

import { cn } from "@/lib/utils";

interface LinksProps {
  name: string;
  href: string;
}

interface MainNavProps {
  className?: string;
  links: LinksProps[];
}

export function MainNav({ className, links, ...props }: MainNavProps) {
  return (
    <nav
      className={cn(
        "hidden md:flex items-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
