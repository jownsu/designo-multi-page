import React from "react";
import LocationContainer from "./_components/LocationContainer";
import { Metadata } from "next";
import { LOCATION_DETAILS } from "../_constants/constants";

const LocationPage = () => {

    return (
        <div className="mb-[300px] flex flex-col gap-[40px] lg:gap-[32px]">
            {LOCATION_DETAILS.map((location, index) => (
                <LocationContainer
                    key={index}
                    id={location.id}
                    center={location.center}
                    title={location.title}
                    office={location.office}
                    address={location.address}
                    contact={location.contact}
                    direction={location.direction}
                />
            ))}
        </div>
    );
};

export const metadata: Metadata = {
    title: "Designo | Locations",
    description: "Location Page of Designo"
};

export default LocationPage;
