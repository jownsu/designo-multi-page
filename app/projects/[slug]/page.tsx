import { Category } from "@/app/_entities/Category";
import { cache } from "react";
import OtherCategories from "./_components/OtherCategories";
import ProjectCard from "./_components/ProjectCard";

interface Props {
    params: { slug: string };
}

const fetchCategory = cache(async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_URL}/api/projects/${slug}`);
    const category: Category = await res.json();

    return category;
});

const ProjectPage = async ({ params }: Props) => {
    const category: Category = await fetchCategory(params.slug);

    const bgStyle = {
        backgroundImage: `url('${category.image}')`
    };

    return (
        <div className="relative md:px-[40px] xl:px-0">
            <img
                src="/images/shared/desktop/bg-pattern-leaf.svg"
                alt="Pattern Leaf"
                className="absolute left-0 top-[130px] z-[-1] hidden translate-x-[-165px] lg:block"
            />

            <div
                className={`flex h-[320px] flex-col items-center justify-center gap-[20px] bg-primary bg-right-top bg-no-repeat px-[24px] text-center text-white md:h-[252px] md:rounded-[15px] md:bg-[length:120%] md:bg-[position:-5px] lg:bg-auto lg:bg-right`}
                style={bgStyle}
            >
                <p className="text-[32px] font-medium md:text-[48px]">
                    {category.title}
                </p>
                <p className="text-[15px] md:w-[400px] md:text-[16px]">
                    {category.description}
                </p>
            </div>

            <div className="container mb-[96px] grid grid-cols-1 gap-[40px] px-[24px] pt-[96px] md:mb-[120px] md:gap-[32px] md:px-0 md:pt-[120px] lg:mb-[160px] lg:grid-cols-3 lg:gap-[30px] lg:px-0 lg:pt-[160px]">
                {category.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <OtherCategories others={category.others} />
        </div>
    );
};

export async function generateMetadata({ params }: Props) {
    const category: Category = await fetchCategory(params.slug);

    return {
        title: `Designo | ${category.title}`,
        description: `${category.title} page`
    };
}

export default ProjectPage;
