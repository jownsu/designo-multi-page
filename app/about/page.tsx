
import classNames from "classnames";
import { ABOUT_BANNER, LOCATIONS } from "../_constants/constants";
import HeroBanner from "../_components/HeroBanner";
import MainBanner from "./_components/MainBanner";
import SecondaryBanner from "./_components/SecondaryBanner";
import LeafPattern from "@/public/images/shared/desktop/bg-pattern-leaf.svg";
import { Metadata } from "next";

const AboutPage = () => {

    return (
        <div className={classNames({ page_container: true, "!pb-[310px]": true })}>
            <MainBanner banner_details={ABOUT_BANNER[0]}/>
            <SecondaryBanner className="" banner_details={ABOUT_BANNER[1]}/>
            <div className="flex flex-col items-center md:flex-row gap-[48px] pt-[120px] z-10 relative">
                {LOCATIONS.map(location => 
                    <HeroBanner 
                        Image={location.image} 
                        variant={"button"} 
                        key={location.title} 
                        title={location.title}
                    />
                )}
            </div>
            <SecondaryBanner className={"lg:flex-row-reverse my-[120px] lg:my-[160px]"} banner_details={ABOUT_BANNER[2]}/>
            <LeafPattern className="hidden absolute lg:block z-0 top-[463px] left-[-311px]"/>
            <LeafPattern className="hidden absolute lg:block z-0 top-[1844px] left-[700px]"/>
        </div>
    )
}

export const metadata: Metadata = {
    title: {
        template: "%s | Designo About",
        default: "Designo | About"
    },
    description: "We are a creative agency that produces lasting results for our clients. Partnered with startups, corporations, and nonprofits alike, we craft designs that make a real impact. Our focus is on creating brands, products, and digital experiences that deeply connect with our clients’ audiences."
}

export default AboutPage