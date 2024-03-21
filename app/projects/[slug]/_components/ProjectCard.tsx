"use client";

import { Project } from "@/app/entities/Project";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Fade duration={1000}>
            <div className="group flex h-[478px] flex-col overflow-hidden rounded-[15px] md:h-[310px] md:flex-row lg:h-[478px] lg:flex-col max-w-[450px] md:max-w-full mx-auto hover:scale-105 duration-200">
                <img
                    src={project.image}
                    alt=""
                    className="h-[320px] object-cover md:h-full lg:h-[320px] lg:w-full"
                />
                <div className="flex flex-1 flex-col items-center justify-center bg-primary_lighter px-[20px] text-center duration-200 group-hover:bg-primary md:gap-[15px] md:px-[40px]">
                    <p className="text-[20px] font-medium uppercase tracking-[5px] text-primary duration-200 group-hover:text-white">
                        {project.title}
                    </p>
                    <p className="duration-200 group-hover:text-white">
                        {project.description}
                    </p>
                </div>
            </div>
        </Fade>
    );
};

export default ProjectCard;
