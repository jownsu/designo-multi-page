"use client";
import CirclePattern from "@/public/images/shared/desktop/bg-pattern-small-circle.svg";
import { Slide } from "react-awesome-reveal";
import { HeroBannerProps } from "../_entities/About";
import Button from "./Button";
import { useRouter } from "next/navigation";

const HeroBanner = ({title, variant, description, Image, id }: HeroBannerProps) => {
    const router = useRouter();

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
                    // can use link instead of button
                    <Button variant="primary" onClick={() => router.push(`/locations#${id}`)}>
                        See Location
                    </Button>
                }
            </div>
        </Slide>
    )
}

export default HeroBanner