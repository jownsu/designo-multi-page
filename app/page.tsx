import { Metadata } from "next";
import AttentionSeeker from "./_components/AttentionSeeker";
import Button from "./_components/Button";
import DesignCard from "./_components/DesignCard";
import Fade from "./_components/Fade";
import Slide from "./_components/Slide";
import { QUALITIES } from "./_constants/constants";

export default function Home() {

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
                    <Fade className="z-10 w-max">
                        <AttentionSeeker effect="tada" delay={1000}>
                            <Button variant="secondary">Learn More</Button>
                        </AttentionSeeker>
                    </Fade>
                </div>
                <img
                    className="absolute top-[465px] scale-[1.6] md:top-[285px] md:scale-[1] lg:right-[-90px] lg:top-[-20px]"
                    src="/images/home/desktop/image-hero-phone.png"
                />
            </div>
            <div className="mb-[50px] grid grid-cols-1 grid-rows-3 justify-center gap-[24px] px-[24px] md:px-[40px] lg:grid-cols-2 lg:grid-rows-2">
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
            </div>
            <div className="mb-[300px] flex flex-col px-[24px] text-black_1 md:px-[40px] lg:flex-row lg:before:absolute lg:before:right-[-165px] lg:before:top-[1580px] lg:before:z-[-1] lg:before:h-[594px] lg:before:w-[1006px] lg:before:scale-[-1] lg:before:bg-[url('/images/shared/desktop/bg-pattern-leaf.svg')]">
                {QUALITIES.map((quality, index) => (
                    <Slide key={index} direction="up" className="my-[80px]">
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
                ))}
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Designo | Home",
    description: "Home Page of Designo"
};
