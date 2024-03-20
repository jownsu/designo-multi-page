import ContactForm from "./_components/ContactForm";
import LeafPattern from "@/public/images/shared/desktop/bg-pattern-leaf.svg";


const ContactPage = () => {
  return (
    <div className="md:p-10 relative">
        <ContactForm/>
        <LeafPattern className="fill-inherit hidden md:block absolute top-[800px] z-0 left-[300px]"/>
    </div>
  );
}

export default ContactPage;