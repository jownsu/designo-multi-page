import HeroBanner from "../_components/HeroBanner";
import { LOCATIONS } from "../_constants/constants";
import ContactForm from "./_components/ContactForm";
import LeafPattern from "@/public/images/shared/desktop/bg-pattern-leaf.svg";
import classNames from "classnames";

const ContactPage = () => {
    return (
        <div className={classNames({ page_container: true })}>
        <ContactForm/>
        <div className="flex flex-col items-center md:flex-row gap-[48px] mt-[120px]">
            {LOCATIONS.map(location => 
                <HeroBanner 
                    Image={location.image} 
                    variant={"button"} 
                    key={location.title} 
                    title={location.title}
                />
            )}
        </div>
            <LeafPattern className="fill-inherit hidden md:block absolute top-[850px] z-[-10] left-[300px]"/>
        </div>
    );
}

export default ContactPage;