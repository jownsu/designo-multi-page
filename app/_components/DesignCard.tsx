import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    category: "APP" | "WEB" | "GRAPHIC";
    small?: boolean;
}

const DesignCard = ({ className, category, small = false }: Props) => {
    const img = {
        APP: [
            "bg-[url('/images/home/mobile/image-app-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-app-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-app-design.jpg')]"
        ],
        WEB: [
            "bg-[url('/images/home/mobile/image-web-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-web-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-web-design-large.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-web-design-small.jpg')]"
        ],
        GRAPHIC: [
            "bg-[url('/images/home/mobile/image-graphic-design.jpg')]",
            "md:bg-[url('/images/home/tablet/image-graphic-design.jpg')]",
            "lg:bg-[url('/images/home/desktop/image-graphic-design.jpg')]"
        ]
    };

    return (
        <Link
            href="/app-design"
            className={`relative flex min-h-[250px] flex-col items-center justify-center rounded-[15px] bg-cover p-[30px] ${className} ${img[category][0]} ${img[category][1]} ${category === "WEB" && small ? img[category][3] : img[category][2]} before:absolute before:top-0 before:h-full before:w-full before:rounded-[15px] before:opacity-[80%] before:hover:bg-primary`}
        >
            <h2 className="z-10 mb-[13px] text-[24px] leading-[30px] text-white">
                {category} DESIGN
            </h2>
            <div
                className="z-10 flex items-center gap-[15px] text-[15px] tracking-[5px] text-white"
            >
                VIEW PROJECTS
                <img src="/images/shared/desktop/icon-right-arrow.svg" />
            </div>
        </Link>
    );
};

export default DesignCard;
