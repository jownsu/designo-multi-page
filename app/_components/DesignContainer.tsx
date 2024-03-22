"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";
import DesignCard from "./DesignCard";

const DesignContainer = () => {
    return (
        <>
            <Fade
                direction="left"
                className="lg:row-start-1 lg:row-end-3"
                fraction={0.02}
            >
                <DesignCard
                    category={"WEB"}
                    href="/projects/web-design"
                    className="h-full"
                />
            </Fade>
            <Fade direction="right" fraction={0.02}>
                <DesignCard
                    category={"APP"}
                    className="bg-black"
                    href="/projects/app-design"
                />
            </Fade>
            <Fade direction="right" fraction={0.02}>
                <DesignCard
                    category={"GRAPHIC"}
                    className="bg-black"
                    href="/projects/graphic-design"
                />
            </Fade>
        </>
    );
};

export default DesignContainer;
