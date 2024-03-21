
import classNames from "classnames";
import { ABOUT_BANNER, LOCATIONS } from "../_constants/constants";
import HeroBanner from "../_components/HeroBanner";
import MainBanner from "./_components/MainBanner";
import SecondaryBanner from "./_components/SecondaryBanner";

const AboutPage = () => {

    return (
        <div className={classNames({ page_container: true, "!pb-[310px]": true })}>
            <MainBanner banner_details={ABOUT_BANNER[0]}/>
            <SecondaryBanner className="" banner_details={ABOUT_BANNER[1]}/>
            <div className="flex flex-col items-center md:flex-row gap-[48px] pt-[120px]">
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
        </div>
    )
}

export default AboutPage