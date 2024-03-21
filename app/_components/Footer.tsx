"use client";
import Link from "next/link";
import FacebookIcon from "@/public/images/shared/desktop/icon-facebook.svg";
import YoutubeIcon from "@/public/images/shared/desktop/icon-youtube.svg";
import TwitterIcon from "@/public/images/shared/desktop/icon-twitter.svg";
import PinterestIcon from "@/public/images/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "@/public/images/shared/desktop/icon-instagram.svg";
import Button from "./Button";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();
    
    return (
        <footer className="relative flex flex-col items-center bg-black_1 pb-[64px] pt-[253px] md:px-[40px] md:pb-[80px] md:pt-[166px] lg:pb-[72px] lg:pt-[142px]">
            {(pathname !== "/contact") &&
                <div className="absolute top-[-190px] flex h-[379px] w-[calc(100%-48px)] flex-col items-center justify-center rounded-[15px] bg-primary bg-[url('/images/shared/desktop/bg-pattern-call-to-action.svg')] bg-[length:250%] bg-[position:-220px] bg-no-repeat px-[20px] md:top-[-264px] md:h-[350px] md:w-[calc(100%-80px)] md:bg-[length:120%] md:bg-[position:0] lg:top-[-220px] lg:h-[292px] lg:max-w-[1111px] lg:flex-row lg:justify-between lg:bg-[length:80%] lg:bg-right lg:px-[96px]">
                    <div className="text-center text-white lg:text-left">
                        <p className="mx-auto mb-[16px] w-[250px] text-[32px] font-medium leading-[37px] md:w-[300px] md:text-[40px] lg:mx-0 lg:mb-[20px]">
                            Let’s talk about your project
                        </p>
                        <p className="mb-[35px] text-[15px] md:w-[420px] lg:mb-0">
                            Ready to take it to the next level? Contact us today and
                            find out how our expertise can help your business grow.
                        </p>
                    </div>
                    <Button variant="secondary">
                        <Link href={"/contact"}>
                            Get in touch
                        </Link>
                    </Button>
                </div>
            }
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
