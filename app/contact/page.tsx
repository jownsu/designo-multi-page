import HeroBanner from "../_components/HeroBanner";
import ContactForm from "./_components/ContactForm";
import LeafPattern from "@/public/images/shared/desktop/bg-pattern-leaf.svg";
import Canada from "@/public/images/shared/desktop/illustration-canada.svg";
import Australia from "@/public/images/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "@/public/images/shared/desktop/illustration-united-kingdom.svg"

/*To be transfered to CONSTANTS */
const LOCATIONS = [
    { 
        image: (
            <Canada/>
        ),
        title: "canada",
    },
    { 
        image: (
            <Australia/>
        ),
        title: "australia",
    },
    { 
        image: (
            <UnitedKingdom/>
        ),
        title: "united-kingdom",
    },
]


const ContactPage = () => {
    return (
    <div className="lg:px-0 sm:px-10 relative z-0">
            <ContactForm/>
            <div className="flex flex-col items-center md:flex-row gap-[48px] py-[120px]">
                {LOCATIONS.map(location => <HeroBanner Image={location.image} variant={"button"} key={location.title} title={location.title}/>)}
            </div>
            <LeafPattern className="fill-inherit hidden md:block absolute top-[850px] z-[-10] left-[300px]"/>
        </div>
    );
}

export default ContactPage;