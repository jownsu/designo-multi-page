
import classNames from "classnames"
import Banner from "./_components/Banner"
import { ABOUT_BANNER, LOCATIONS } from "../_constants/constants"
import HeroBanner from "../_components/HeroBanner"

const AboutPage = () => {

    return (
        <div className={classNames({ page_container: true, "!pb-[310px]": true })}>
             <Banner banner_details={ABOUT_BANNER[0]} variant="primary"/>
             <Banner banner_details={ABOUT_BANNER[1]} variant="secondary"/>
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
            <Banner banner_details={ABOUT_BANNER[2]} variant="secondary"/>
        </div>
    )
}

export default AboutPage