"use client";

import DesignCard from "@/app/_components/DesignCard";
import { OtherCategory } from "@/app/entities/Category";
import { Slide } from "react-awesome-reveal";

interface Props {
    others: OtherCategory[];
}

const OtherCategories = ({ others }: Props) => {
    return (
        <div className="mb-[286px] flex flex-col gap-[24px] px-[24px] md:mb-[384px] md:px-0 lg:mb-[380px] lg:flex-row">
            {others.map((cat, index) => (
                <Slide
                    key={cat.category}
                    className="w-full"
                    direction={index % 2 === 0 ? "left" : "right"}
                >
                    <DesignCard
                        className="lg:w-full"
                        category={cat.category}
                        href={cat.href}
                    />
                </Slide>
            ))}
        </div>
    );
};

export default OtherCategories;
