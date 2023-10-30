import Image from "next/image";

import calendar from "@/public/svg/calendar.svg";
import contract from "@/public/svg/contract.svg";
import dashboard from "@/public/svg/dashboard.svg";
import folder from "@/public/svg/folder.svg";
import logo from "@/public/svg/logo.svg";
import mission from "@/public/svg/mission.svg";

import { Menu, Play } from "lucide-react";
import { ActiveLink } from "./active-link";
import { INavlinks } from "@/types";

const navLinks: INavlinks[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: dashboard,
  },
  {
    label: "Planning",
    href: "#",
    icon: calendar,
  },
  {
    label: "Missions",
    href: "#",
    icon: mission,
  },
  {
    label: "Cahier de transmission",
    href: "/cahiers-de-transmission",
    icon: folder,
  },
  {
    label: "Contrats",
    href: "#",
    icon: contract,
  },
];

const Navbar = () => {
  return (
    <header className="border-b border-zinc-200 bg-white h-[72px]">
      <nav className="flex items-center justify-between pl-4 py-4 lg:pl-12 lg:py-0 h-full ">
        <Image
          src={logo}
          alt="logo"
          width={102}
          height={32}
          className="object-cover "
        />

        <Menu className="lg:hidden" size={32} />

        <ul className="hidden lg:flex items-center gap-6 h-full text-blue-4">
          {navLinks.map((link: any) => (
            <ActiveLink
              key={link.label}
              href={link.href}
              className="relative flex items-center gap-2 text-sm font-medium p-2 h-full"
            >
              <Image
                src={link.icon}
                alt={`${link.label}-icon`}
                width={20}
                height={20}
                className="object-cover aspect-square"
              />
              {link.label}
            </ActiveLink>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4 border border-zinc-200 py-4 px-6">
          <div className="w-10 h-10 bg-gray-50 rounded-2xl" />
          <span className="text-blue-1 font-medium text-sm">Linda C.</span>
          <Play className="rotate-90 text-gray-400" size={10} fill="#5F5F5F" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
