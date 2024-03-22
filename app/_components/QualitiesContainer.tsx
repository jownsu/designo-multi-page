"use client";
import React from "react";
import { Slide } from "react-awesome-reveal";

const QualitiesContainer = ({
    quality
}: {
    quality: {
        image: JSX.Element;
        title: string;
        description: string;
        rotation: string;
    };
}) => {
    return (
        <Slide direction="up" className="my-[80px]">
            <div className="flex flex-col items-center md:flex-row lg:flex-col">
                <div
                    className={`relative before:absolute before:left-0 before:z-[-1] before:h-[202px] before:w-[202px] before:bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] before:bg-[length:202px_202px] ${quality.rotation}`}
                >
                    {quality.image}
                </div>
                <div className="ml-0 px-[24px] md:ml-[80px] lg:ml-0 lg:px-0">
                    <Slide direction="up" cascade damping={0.1}>
                        <h2 className="my-[30px] text-center text-[20px] font-medium leading-[26px] tracking-[5px] md:text-left lg:text-center">
                            {quality.title}
                        </h2>
                        <p className="text-center text-[16px] leading-[26px] md:text-left lg:text-center">
                            {quality.description}
                        </p>
                    </Slide>
                </div>
            </div>
        </Slide>
    );
};

export default QualitiesContainer;
