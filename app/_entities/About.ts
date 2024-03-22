import { ReactNode } from "react";

interface ImagePath  {
    sm:string;
    md:string;
    lg:string;
}

interface BannerDetails {
    title: string;
    image_path: ImagePath;
    description: string;
}

export interface MainBannerProps {
    banner_details: BannerDetails;
}

export interface SecondaryBannerProps {
    banner_details: BannerDetails;
    className?: string;
}

export interface HeroBannerProps {
    id: string;
    title: string;
    variant: "text" | "button";
    description?: string;
    Image: ReactNode;
}
