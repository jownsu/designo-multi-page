import React from "react";

interface Props {
    title: string;
    office: string;
    address: string;
    phone: string;
    email: string;
}

const ContactDetails = ({ title, office, address, phone, email }: Props) => {
    return (
        <>
            <div className="flex h-[394px] w-full flex-col items-center justify-center gap-[24px] bg-[#FDF3F0] bg-[url('/images/shared/desktop/bg-pattern-three-circles.svg')] bg-no-repeat md:items-start md:rounded-[15px] md:bg-[size:95%] md:bg-[position:-15px_-279px] md:px-[75px] lg:h-full lg:bg-[url('/images/shared/desktop/bg-pattern-two-circles.svg')] lg:bg-[size:85%] lg:bg-left-bottom"></div>
            <h2 className="text-[32px] leading-[36px] text-primary md:text-[40px] md:font-medium">
                {title}
            </h2>
            <div className="flex flex-col gap-[24px] md:flex-row md:gap-[85px] lg:max-h-[70px]">
                <div className="flex flex-col items-center justify-center md:items-start">
                    <h3 className="text-[15px] font-bold leading-[25px]">
                        {office}
                    </h3>
                    <p className="w-[210px] break-words text-center text-[15px] leading-[25px] md:text-left">
                        {address}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start">
                    <h3 className="text-[15px] font-bold leading-[25px]">
                        Contact
                    </h3>
                    <p className="text-[15px] leading-[25px]">P : {phone}</p>
                    <p className="break-words text-[15px] leading-[25px]">
                        M : {email}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactDetails;
