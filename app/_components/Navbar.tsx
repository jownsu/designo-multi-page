"use client";
import Hamburger from "@/public/images/shared/mobile/icon-hamburger.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAVLINKS } from "../_constants/constants";
import Close from "/public/images/shared/mobile/icon-close.svg";

const Navbar = () => {
    const pathname = usePathname();
    const [is_navbar_open, setIsNavbarOpen] = useState(false);

    return (
        <div className="sticky top-0 z-[99999] bg-white">
            <div className="container mx-auto h-[96px] px-0 md:flex md:h-[155px] md:px-[40px]">
                <div className="flex h-full items-center justify-between px-[24px] md:px-0">
                    <Link href="/" onClick={() => setIsNavbarOpen(false)}>
                        <img
                            src="/images/shared/desktop/logo-dark.png"
                            alt="Designo Logo"
                            className="h-[27px] w-[202px] min-w-[202px]"
                        />
                    </Link>
                    <button
                        className={"block md:hidden"}
                        onClick={() => setIsNavbarOpen(!is_navbar_open)}
                    >
                        {is_navbar_open ? <Close /> : <Hamburger />}
                    </button>
                </div>
                <nav
                    className={`${is_navbar_open ? "flex" : "hidden"} w-full flex-col justify-center gap-[32px] bg-[#1D1C1E] px-[24px] py-[48px] md:flex md:flex-row md:items-center md:justify-end md:bg-inherit md:p-0`}
                >
                    {NAVLINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[24px] leading-[25px] tracking-[2px] text-white hover:underline md:text-[14px] md:text-black_1 ${pathname === link.href ? "md:text-primary" : ""}`}
                            onClick={() => setIsNavbarOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div
                    onClick={() => setIsNavbarOpen(false)}
                    className={`${is_navbar_open ? "block" : "hidden"} h-screen w-full bg-black opacity-[50%] md:hidden`}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;
