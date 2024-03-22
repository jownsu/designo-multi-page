import Canada from "@/public/images/shared/desktop/illustration-canada.svg";
import Australia from "@/public/images/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "@/public/images/shared/desktop/illustration-united-kingdom.svg"
import Friendly from "@/public/images/home/desktop/illustration-friendly.svg";
import Passionate from "@/public/images/home/desktop/illustration-passionate.svg";
import Resourceful from "@/public/images/home/desktop/illustration-resourceful.svg";

/*To be transfered to CONSTANTS */
export const LOCATIONS = [
    { 
        id: "canada",
        image: (
            <Canada/>
        ),
        title: "canada",
    },
    { 
        id: "australia",
        image: (
            <Australia/>
        ),
        title: "australia",
    },
    { 
        id: "united-kingdom",
        image: (
            <UnitedKingdom/>
        ),
        title: "united-kingdom",
    },
]

export const ABOUT_BANNER = [
    {
        image_path: {
           sm: "/images/about/mobile/image-about-hero.jpg",
            md: "/images/about/tablet/image-about-hero.jpg",
            lg: "/images/about/desktop/image-about-hero.jpg"
        },
        title: "About Us",
        description: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
    },
    {
        image_path: {
            sm:"/images/about/mobile/image-world-class-talent.jpg",
            md: "images/about/tablet/image-world-class-talent.jpg",
            lg: "/images/about/desktop/image-world-class-talent.jpg"
        },
        title: "World-class talent",
        description: "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. \n\nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission."
    },
    {
        image_path: {
            sm: "/images/about/mobile/image-real-deal.jpg",
            md: "/images/about/tablet/image-real-deal.jpg",
            lg: "/images/about/desktop/image-real-deal.jpg"
        },
        title: "The real deal",
        description: "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.\n\nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results." 
    }
]

export const QUALITIES = [
    {
        image: <Passionate className="min-w-[202px]" />,
        title: "PASSIONATE",
        description:
            "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
        rotation: "before:-rotate-90"
    },
    {
        image: <Resourceful className="min-w-[202px]" />,
        title: "RESOURCEFUL",
        description:
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
        rotation: "before:-rotate-180"
    },
    {
        image: <Friendly className="min-w-[202px]" />,
        title: "FRIENDLY",
        description:
            "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
        rotation: ""
    }
];

export const IMG = {
    APP: [
        "bg-[url('/images/home/mobile/image-app-design.jpg')]",
        "md:bg-[url('/images/home/tablet/image-app-design.jpg')]",
        "lg:bg-[url('/images/home/desktop/image-app-design.jpg')]"
    ],
    WEB: [
        "bg-[url('/images/home/mobile/image-web-design.jpg')]",
        "md:bg-[url('/images/home/tablet/image-web-design.jpg')]",
        "lg:bg-[url('/images/home/desktop/image-web-design-large.jpg')]",
        "lg:bg-[url('/images/home/desktop/image-web-design-small.jpg')]"
    ],
    GRAPHIC: [
        "bg-[url('/images/home/mobile/image-graphic-design.jpg')]",
        "md:bg-[url('/images/home/tablet/image-graphic-design.jpg')]",
        "lg:bg-[url('/images/home/desktop/image-graphic-design.jpg')]"
    ]
};

export const NAVLINKS = [
    {
        name: "OUR COMPANY",
        href: "/about"
    },
    {
        name: "LOCATIONS",
        href: "/locations"
    },
    {
        name: "CONTACT",
        href: "/contact"
    }
];

export const LOCATION_DETAILS: {
    id: string;
    center: [number, number];
    title: string;
    office: string;
    address: string;
    contact: {
        phone: string;
        email: string;
        direction?: "left" | "right";
    };
    direction?: "left" | "right";
}[] = [
    {
        id: "canada",
        center: [43.6544251, -79.4216365],
        title: "Canada",
        office: "Designo Central Office",
        address: "3886 Wellington Street Toronto, Ontario M9C 3J5",
        contact: {
            phone: "+1 253-863-8967",
            email: "contact@designo.co",
            direction: "left"
        },
        direction: "right"
    },
    {
        id: "australia",
        center: [-30.3293938, 149.785665],
        title: "Australia",
        office: "Designo AU Office",
        address: "19 Balonne Street New South Wales 2443",
        contact: {
            phone: "(02) 6720 9092",
            email: "contact@designo.au",
            direction: "right"
        },
        direction: "left"
    },
    {
        id: "united-kingdom",
        center: [51.7320575, -3.8721996],
        title: "United Kingdom",
        office: "Designo UK Office",
        address: "13 Colorado Way Rhyd-y-fro SA8 9GA",
        contact: {
            phone: "078 3115 1400",
            email: "contact@designer.uk",
            direction: "left"
        },
        direction: "right"
    }
];