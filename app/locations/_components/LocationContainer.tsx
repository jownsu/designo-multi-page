import React from "react";
import Map from "./Map";

export interface MapProps {
    center: [number, number];
    title: string;
    office: string;
    address: string;
    contact: {
        phone: string;
        email: string;
    };
}

const LocationContainer = ({
    center,
    title,
    office,
    address,
    contact: { phone, email }
}: MapProps) => {
    return (
        <div className="flex flex-col gap-[24px] even:flex-row-reverse md:mx-[40px] md:mb-[120px] lg:mb-0 lg:h-[326px] lg:flex-row">
            <div className="overflow-hidden md:rounded-[15px] lg:min-w-[350px]">
                <Map center={center} />
            </div>
            <div className="flex h-[394px] w-full flex-col items-center justify-center gap-[24px] bg-[#FDF3F0] md:items-start md:rounded-[15px] md:px-[75px] lg:h-full">
                <h2 className="text-[32px] leading-[36px] text-primary md:text-[40px] md:font-medium">
                    {title}
                </h2>
                <div className="flex flex-col gap-[24px] md:flex-row md:gap-[110px]">
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
                        <p className="text-[15px] leading-[25px]">
                            P : {phone}
                        </p>
                        <p className="text-[15px] leading-[25px]">
                            M : {email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationContainer;
