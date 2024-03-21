import BGCirclePatternDesktop from "@/public/images/about/desktop/bg-pattern-hero-about-desktop.svg";
import BGCirclePatternMobile from "@/public/images/about/mobile/bg-pattern-hero-about-mobile.svg";

interface BannerDetails {
    title: string;
    image_path: {
        sm:string;
        md:string;
        lg:string;
    }
    description: string;
}
interface BannerProps {
    banner_details: BannerDetails;
    variant: "primary" | "secondary";
}

const Banner = ({banner_details, variant} : BannerProps) => {

    return (
        <div className={`overflow-hidden ${(variant === "primary") && "bg-primary text-white mt-[70]"} ${(variant === "secondary") && "bg-primary_lighter  text-dark_grey sm:mt-[120px] md:mt-[160px]"} flex flex-col md:flex-row-reverse md:items-center min-h-[483px] sm:rounded-lg relative`}>
            {/* <div className={`${banner_details.image_path[0]} ${banner_details.image_path[1]} ${banner_details.image_path[2]} z-10 min-h-[250px] bg-cover max-w-full h-auto`}/> */}
            <picture>
                <source media="(max-width: 1111px)" srcSet={banner_details.image_path.lg} />
                {/* desktop */}
                <source media="(min-width: 768px)" srcSet={banner_details.image_path.md} />
                {/* tablet */}
                <source media="(min-width: 640px)" srcSet={banner_details.image_path.sm} />
                {/* mobile */}
                <img src={banner_details.image_path.sm} alt="Chris standing up holding his daughter Elva"  className="z-10 min-h-[250px] bg-cover max-w-full h-auto"/>
                {/* mobile */}
            </picture>
            
            <div className="text-center my-[80px] mx-[24px] z-10">
                <h1 className={`text-[32px] font-medium mb-6 ${(variant === "secondary") && "text-primary"}`}>{banner_details.title}</h1>
                <p className="text-base">{banner_details.description}</p>
            </div>
            {(variant === "primary") &&    
                    <BGCirclePatternDesktop className="hidden sm:block top-[-172px] left-[-156px] absolute md:top-[-157px] md:left-[-35px]"/>
            }
            <BGCirclePatternMobile className={`sm:hidden absolute ${(variant === "primary") && "top-[125px] left-[-157px]"} ${(variant === "secondary") && "top-[490px] left-[-330px] opacity-50"} z-0"`}/>
        </div>
    )
}

export default Banner