import React from "react";
import LocationContainer from "./_components/LocationContainer";

const LocationPage = () => {
    const locations: {
        center: [number, number];
        title: string;
        office: string;
        address: string;
        contact: {
            phone: string;
            email: string;
        };
    }[] = [
        {
            center: [43.6544251, -79.4216365],
            title: "Canada",
            office: "Designo Central Office",
            address: "3886 Wellington Street Toronto, Ontario M9C 3J5",
            contact: {
                phone: "+1 253-863-8967",
                email: "contact@designo.co"
            }
        },
        {
            center: [-30.3293938, 149.785665],
            title: "Australia",
            office: "Designo AU Office",
            address: "19 Balonne Street New South Wales 2443",
            contact: {
                phone: "(02) 6720 9092",
                email: "contact@designo.au"
            }
        },
        {
            center: [51.7320575, -3.8721996],
            title: "United Kingdom",
            office: "Designo UK Office",
            address: "13 Colorado Way Rhyd-y-fro SA8 9GA",
            contact: {
                phone: "078 3115 1400",
                email: "contact@designer.uk"
            }
        }
    ];
    return (
        <div className="flex flex-col gap-[40px] lg:gap-[32px]">
            {locations.map((location, index) => (
                <LocationContainer
                    key={index}
                    center={location.center}
                    title={location.title}
                    office={location.office}
                    address={location.address}
                    contact={location.contact}
                />
            ))}
        </div>
    );
};

export default LocationPage;
