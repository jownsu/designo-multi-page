"use client";
import React, { useState } from "react";
import Hamburger from "@/public/images/shared/mobile/icon-hamburger.svg";
import Close from "/public/images/shared/mobile/icon-close.svg";
const Navbar = () => {
    const links = [
        {
            name: "OUR COMPANY",
            href: "/"
        },
        {
            name: "LOCATIONS",
            href: "/"
        },
        {
            name: "CONTACT",
            href: "/"
        }
    ];
    const [is_navbar_open, setIsNavbarOpen] = useState(true);

    return (
        <div className="sticky top-0 h-[96px] bg-white px-0 md:flex md:h-[155px] md:px-[39px] lg:px-[165px]">
            <div className="flex h-full items-center justify-between px-[24px] md:px-0">
                <img
                    src="/images/shared/desktop/logo-dark.png"
                    alt="Designo Logo"
                    className="h-[27px] w-[202px] min-w-[202px]"
                />
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
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-[24px] leading-[25px] tracking-[2px] text-white md:text-[14px] md:text-black_1"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
            <div
                className={`${is_navbar_open ? "block" : "hidden"} h-screen w-full bg-black opacity-[50%] md:hidden`}
            ></div>
        </div>
    );
};

export default Navbar;
