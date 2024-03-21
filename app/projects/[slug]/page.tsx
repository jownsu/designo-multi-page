import { Category } from "@/app/entities/Category";
import ProjectCard from "../_components/ProjectCard";

interface Props {
    params: { slug: string };
}

const ProjectPage = async ({ params }: Props) => {
    const res = await fetch(
        `http://localhost:3000/api/projects/${params.slug}`
    );
    const category: Category = await res.json();

    const testStyle = {
        backgroundImage: `url('${category.image}')`
    };

    return (
        <div className="md:px-[40px] xl:px-0">
            <div
                className={`flex h-[320px] flex-col items-center justify-center gap-[20px] bg-primary bg-right-top bg-no-repeat px-[24px] text-center text-white md:h-[252px] md:rounded-[15px] md:bg-[length:120%] md:bg-[position:-5px] lg:bg-auto lg:bg-right`}
                style={testStyle}
            >
                <p className="text-[32px] font-medium md:text-[48px]">
                    {category.title}
                </p>
                <p className="text-[15px] md:w-[400px] md:text-[16px]">
                    {category.description}
                </p>
            </div>

            <div className="container grid grid-cols-1 gap-[40px] px-[24px] pb-[300px] pt-[96px] md:gap-[32px] md:px-0 md:pt-[120px] lg:grid-cols-3 lg:gap-[30px] lg:px-0 lg:pt-[160px]">
                {category.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
