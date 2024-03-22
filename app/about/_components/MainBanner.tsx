import BGCirclePatternDesktop from "@/public/images/about/desktop/bg-pattern-hero-about-desktop.svg";
import { MainBannerProps } from "@/app/entities/About";

const MainBanner = ({banner_details}: MainBannerProps) => {
    return (
        <div className="relative bg-primary text-white flex flex-col min-h-[715px] sm:min-h-[632px] sm:rounded-[15px] lg:flex-row-reverse  md:items-center lg:h-[483px] overflow-hidden z-10">
             <picture className="lg:shrink-0 lg:h-full md:w-full lg:w-auto z-10">
                <source media="(min-width: 1111px)" srcSet={banner_details.image_path.lg} />
                {/* desktop */}
                <source media="(min-width: 768px)" srcSet={banner_details.image_path.md} />
                {/* tablet */}
                <source media="(max-width: 640px)" srcSet={banner_details.image_path.sm} />
                {/* mobile */}
                <img src={banner_details.image_path.sm} alt="" className="z-10 min-h-[250px] bg-cover w-full h-full lg:w-[476px] " />
                {/* mobile */}
            </picture>
            <div className="text-center my-[80px] mx-[24px] z-10 lg:text-left lg:ml-[95px]">
                <h1 className="text-[32px] sm:text-[48px] font-medium mb-6">{banner_details.title}</h1>
                <p className="text-base lg:mr-[82px]">{banner_details.description}</p>
            </div>
            <BGCirclePatternDesktop className="z-0 fill-inherit absolute scale-50 top-[42px] left-[-62px] sm:scale-75 sm:top-[-47px] sm:left-[-106px] lg:scale-100 lg:top-[0px] lg:left-[0px]"/>
        </div>
    )
}

export default MainBanner;