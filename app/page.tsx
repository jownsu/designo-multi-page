import Button from "./_components/Button";
import DesignCard from "./_components/DesignCard";
import Passionate from "@/public/images/home/desktop/illustration-passionate.svg";
import Resourceful from "@/public/images/home/desktop/illustration-resourceful.svg";
import Friendly from "@/public/images/home/desktop/illustration-friendly.svg";

export default function Home() {
    const qualities = [
        {
            image: (
                <Passionate className="min-w-[202px] bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[length:202px_202px] bg-[position:50%] bg-no-repeat" />
            ),
            title: "PASSIONATE",
            description:
                "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        },
        {
            image: (
                <Resourceful className="min-w-[202px] bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[length:202px_202px] bg-[position:50%] bg-no-repeat" />
            ),
            title: "RESOURCEFUL",
            description:
                "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
        },
        {
            image: (
                <Friendly className="min-w-[202px] bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[length:202px_202px] bg-[position:50%] bg-no-repeat" />
            ),
            title: "FRIENDLY",
            description:
                "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        }
    ];

    return (
        <>
            <div className="mb-[120px] flex h-[843px] flex-col overflow-hidden bg-primary bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-[-40px_75px] bg-no-repeat md:mx-[40px] md:rounded-[15px] md:bg-[175px_120px] lg:h-[640px] lg:flex-row lg:bg-right-top ">
                <div className="px-[30px] pt-[80px] text-center md:px-[100px] lg:pt-[145px] lg:text-left">
                    <h1 className="text-[32px] leading-[36px] text-white md:text-[48px] md:leading-[48px]">
                        Award-winning custom designs and digital branding
                        solutions
                    </h1>
                    <p className="mb-[30px] mt-[30px] text-[15px] leading-[25px] text-white">
                        With over 10 years in the industry, we are experienced
                        in creating fully responsive websites, app design, and
                        engaging brand experiences. Find out more about our
                        services.
                    </p>
                    <Button variant="secondary">Learn More</Button>
                </div>
                <img
                    className="relative bottom-[-80px] right-[50%] translate-x-[50%] scale-[1.6] md:bottom-[150px] md:scale-[1] lg:bottom-[-110px] lg:right-[250px] lg:scale-[1.4]"
                    src="/images/home/desktop/image-hero-phone.png"
                />
            </div>
            <div className="mb-[50px] grid grid-cols-1 grid-rows-3 justify-center gap-[24px] px-[24px] md:px-[40px] lg:grid-cols-2 lg:grid-rows-2">
                <DesignCard
                    category={"WEB"}
                    className="lg:row-start-1 lg:row-end-3"
                    href="/web-design"
                />
                <DesignCard category={"APP"} className="bg-black"
                    href="/app-design"
                />
                <DesignCard category={"GRAPHIC"} className="bg-black" 
                    href="/graphic-design"
                />
            </div>
            <div className="mb-[300px] flex flex-col px-[24px] text-black_1 md:px-[40px] lg:flex-row">
                {qualities.map((quality, index) => (
                    <div
                        key={index}
                        className="my-[80px] flex flex-col items-center md:flex-row lg:flex-col"
                    >
                        {quality.image}
                        <div className="ml-0 px-[24px] md:ml-[80px] lg:ml-0">
                            <h2 className="my-[30px] text-center text-[20px] font-medium leading-[26px] tracking-[5px] md:text-left lg:text-center">
                                {quality.title}
                            </h2>
                            <p className="text-center text-[16px] leading-[26px] md:text-left lg:text-center">
                                {quality.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
