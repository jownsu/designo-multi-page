"use client";
import { ReactNode } from "react";
import Button from "./Button";
import CirclePattern from "@/public/images/shared/desktop/bg-pattern-small-circle.svg";
import { Slide } from "react-awesome-reveal";

interface HeroBannerProps {
    title: string;
    variant: "text" | "button";
    description?: string;
    Image: ReactNode;
    action?: () => void;
}

const HeroBanner = ({title, variant, description, Image, action }: HeroBannerProps) => {

    return (
        <Slide direction="up" duration={1000} delay={0}>
            <div className="flex flex-col items-center w-[350px] z-10">
                <div>
                    <CirclePattern className="absolute !w-[202px] !h-[202px] fill-inherit"/>
                    {Image}
                </div>
                <p className="text-xl font-medium mb-[32px] mt-[48px]">{title.replace("-", " ").toUpperCase()}</p>
                {(variant === "text") && <p>{description}</p> }
                {(variant === "button") &&
                    <Button variant="primary" onClick={action}>
                        See Location
                    </Button>
                }
            </div>
        </Slide>
    )
}

export default HeroBanner