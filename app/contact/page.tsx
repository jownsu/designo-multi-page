import { Metadata } from "next";
import HeroBanner from "../_components/HeroBanner";
import { LOCATIONS } from "../_constants/constants";
import ContactForm from "./_components/ContactForm";
import LeafPattern from "@/public/images/shared/desktop/bg-pattern-leaf.svg";
import classNames from "classnames";

const ContactPage = () => {
    return (
        <div className={classNames({ page_container: true })}>
            <ContactForm />
            <div className="flex flex-col items-center md:flex-row gap-[48px] mt-[120px] z-10">
                {LOCATIONS.map((location) => (
                    <HeroBanner
                        Image={location.image}
                        variant={"button"}
                        key={location.title}
                        title={location.title}
                        id={location.id}
                    />
                ))}
            </div>
            <LeafPattern className="fill-inherit hidden md:block absolute top-[850px] z-[-10] left-[300px]" />
        </div>
    );
};

export const metadata: Metadata = {
    title: {
        template: "%s | Designo Contact",
        default: "Designo | Contact",
    },
    description:
        "We are a creative agency that produces lasting results for our clients. Partnered with startups, corporations, and nonprofits alike, we craft designs that make a real impact. Our focus is on creating brands, products, and digital experiences that deeply connect with our clients’ audiences.",
};

export default ContactPage;
