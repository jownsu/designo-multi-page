

import FacebookIcon from "@/public/images/shared/desktop/icon-facebook.svg";
import InstagramIcon from "@/public/images/shared/desktop/icon-instagram.svg";

import PinterestIcon from "@/public/images/shared/desktop/icon-pinterest.svg";
import TwitterIcon from "@/public/images/shared/desktop/icon-twitter.svg";
import YoutubeIcon from "@/public/images/shared/desktop/icon-youtube.svg";
import Link from "next/link";
import GetInTouch from "./GetInTouch";


const LINKS = [
    {
        label: "Our company",
        href: "/about"
    },
    {
        label: "Locations",
        href: "/locations"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];

const SOCIAL_LINKS = [
    {
        icon: (
            <FacebookIcon className="fill-primary duration-200 hover:fill-primary_light" />
        ),
        href: "https://facebook.com"
    },
    {
        icon: (
            <YoutubeIcon className="fill-primary duration-200 hover:fill-primary_light" />
        ),
        href: "https://youtube.com"
    },
    {
        icon: (
            <TwitterIcon className="fill-primary duration-200 hover:fill-primary_light" />
        ),
        href: "https://x.com"
    },
    {
        icon: (
            <PinterestIcon className="fill-primary duration-200 hover:fill-primary_light" />
        ),
        href: "https://pinterest.com"
    },
    {
        icon: (
            <InstagramIcon className="fill-primary duration-200 hover:fill-primary_light" />
        ),
        href: "https://instagram.com"
    }
];

const Footer = () => {
    return (
        <footer className="relative flex flex-col items-center bg-black_1 pb-[64px] pt-[253px] md:px-[40px] md:pb-[80px] md:pt-[166px] lg:pb-[72px] lg:pt-[142px]">

            <GetInTouch />

            <div className="container text-center text-white md:text-start">
                <div className="mb-[20px] flex flex-col self-stretch px-[24px] md:mb-[35px] md:flex-row md:justify-between md:border-b md:border-white md:border-opacity-10 md:px-0 md:pb-[42px]">
                    <div className="mb-[30px] border-b border-white border-opacity-10 pb-[30px] md:mb-0 md:border-none md:pb-0">
                        <img
                            src="/images/shared/desktop/logo-light.png"
                            alt="Logo of designo website"
                            className="mx-auto h-[27px]"
                        />
                    </div>
                    <ul className="mb-[20px] flex flex-col gap-[26px] text-[14px] uppercase tracking-[2px] md:mb-0 md:flex-row md:gap-[42px]">
                        {LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="hover:underline"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-[45px] md:w-full md:flex-row md:gap-0">
                    <div className="space-y-[3px] opacity-50 md:mr-[60px] lg:mr-[207px]">
                        <p className="font-bold">Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="space-y-[3px] opacity-50">
                        <p className="font-bold">Contact Us (Central Office)</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                    <ul className="flex justify-between gap-[16px] md:ml-auto md:self-end">
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
