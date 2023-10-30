"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, className, children }: Props) => {
  const pathname = usePathname();

  const isActive: boolean = useMemo(() => {
    // return pathname === href || (pathname + "/").startsWith(href + "/");
    return pathname === href;
  }, [pathname, href]);

  return (
    <Link
      href={href}
      className={clsx(
        className,
        isActive && "text-blue-1 font-medium  border-b-2 border-primary"
      )}
    >
      {children}
    </Link>
  );
};
