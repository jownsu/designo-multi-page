import Friendly from "@/public/images/home/desktop/illustration-friendly.svg";
import Passionate from "@/public/images/home/desktop/illustration-passionate.svg";
import Resourceful from "@/public/images/home/desktop/illustration-resourceful.svg";
import { Metadata } from "next";
import DesignContainer from "./_components/DesignContainer";
import LearnMoreButton from "./_components/LearnMoreButton";
import QualitiesContainer from "./_components/QualitiesContainer";

export default function Home() {
    const qualities = [
        {
            image: <Passionate className="min-w-[202px]" />,
            title: "PASSIONATE",
            description:
                "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
            rotation: "before:-rotate-90"
        },
        {
            image: <Resourceful className="min-w-[202px]" />,
            title: "RESOURCEFUL",
            description:
                "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
            rotation: "before:-rotate-180"
        },
        {
            image: <Friendly className="min-w-[202px]" />,
            title: "FRIENDLY",
            description:
                "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
            rotation: ""
        }
    ];

    return (
        <div className="lg:before:absolute lg:before:left-[-160px] lg:before:top-[330px] lg:before:h-[594px] lg:before:w-[1006px] lg:before:bg-[url('/images/shared/desktop/bg-pattern-leaf.svg')]">
            <div className="relative mb-[160px] flex h-[843px] flex-col items-center overflow-hidden bg-primary bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[right_-220px_top_75px] bg-no-repeat px-[25px] py-[75px] md:mx-[40px] md:rounded-[15px] md:bg-[right_-122px_top_122px] md:pt-[60px] lg:h-[640px] lg:flex-row lg:bg-right-top lg:px-[96px] lg:py-[145px]">
                <div className="flex max-w-[540px] flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-[32px] leading-[36px] text-white md:text-[48px] md:leading-[48px]">
                        Award-winning custom designs and digital branding
                        solutions
                    </h1>
                    <p className="mb-[30px] mt-[30px] max-w-[410px] text-[15px] leading-[25px] text-white">
                        With over 10 years in the industry, we are experienced
                        in creating fully responsive websites, app design, and
                        engaging brand experiences. Find out more about our
                        services.
                    </p>
                    <LearnMoreButton />
                </div>
                <img
                    className="absolute top-[465px] scale-[1.6] md:top-[285px] md:scale-[1] lg:right-[-90px] lg:top-[-20px]"
                    src="/images/home/desktop/image-hero-phone.png"
                />
            </div>
            <div className="mb-[50px] grid grid-cols-1 grid-rows-3 justify-center gap-[24px] px-[24px] md:px-[40px] lg:grid-cols-2 lg:grid-rows-2">
                <DesignContainer />
            </div>
            <div className="mb-[300px] flex flex-col px-[24px] text-black_1 md:px-[40px] lg:flex-row lg:before:absolute lg:before:right-[-165px] lg:before:top-[1580px] lg:before:z-[-1] lg:before:h-[594px] lg:before:w-[1006px] lg:before:scale-[-1] lg:before:bg-[url('/images/shared/desktop/bg-pattern-leaf.svg')]">
                {qualities.map((quality, index) => (
                    <QualitiesContainer key={index} quality={quality} />
                ))}
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Designo | Home",
    description: "Home Page of Designo",
}
