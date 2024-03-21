import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    category: "APP" | "WEB" | "GRAPHIC";
}

const DesignCard = ({ className, category }: Props) => {
    const img = {
        APP: [
            "bg-[url('/images/home/mobile/image-app-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-app-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-app-design.jpg')]"
        ],
        WEB: [
            "bg-[url('/images/home/mobile/image-web-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-web-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-web-design-large.jpg')]"
        ],
        GRAPHIC: [
            "bg-[url('/images/home/mobile/image-graphic-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-graphic-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-graphic-design.jpg')]"
        ]
    };

    return (
        <div
            className={`relative flex min-h-[250px] flex-col items-center justify-center rounded-[15px] bg-cover p-[30px] ${className} ${img[category][0]} ${img[category][1]} ${img[category][2]} before:absolute before:top-0 before:hover:bg-primary before:opacity-[80%] before:w-full before:h-full before:rounded-[15px]`}
        >
            <h2 className="mb-[13px] text-[24px] leading-[30px] text-white z-10">
                {category} DESIGN
            </h2>
            <Link
                href="/app-design"
                className="flex items-center gap-[15px] text-[15px] tracking-[5px] text-white z-10"
            >
                VIEW PROJECTS
                <img src="/images/shared/desktop/icon-right-arrow.svg" />
            </Link>
        </div>
    );
};

export default DesignCard;
