
import BGCirclePattern from "@/public/images/shared/desktop/bg-pattern-three-circles.svg";
import { SecondaryBannerProps } from "@/app/_entities/About";


const SecondaryBanner = ({className, banner_details}: SecondaryBannerProps) => {
    return (
        <div className={`relative md:mx-[40px] bg-primary_lighter text-dark_grey md:mt-[120px] lg:mt-[160px] flex flex-col min-h-[715px] sm:min-h-[632px] sm:rounded-[15px] lg:flex-row md:items-center lg:h-[483px] overflow-hidden z-10 ${className}`}>
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
                <h1 className="text-[32px] sm:text-[48px] font-medium mb-6 text-primary">{banner_details.title}</h1>
                <p className="text-base lg:mr-[82px]">{banner_details.description}</p>
            </div>
            <BGCirclePattern className={`absolute top-[280px] left-[-25px] z-0 md:top-[161px] md:left-[85px]`}/>
        </div>
    )
}

export default SecondaryBanner;