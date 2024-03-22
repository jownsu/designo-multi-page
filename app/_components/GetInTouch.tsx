"use client";

import { usePathname, useRouter } from "next/navigation";
import { AttentionSeeker } from "react-awesome-reveal";
import Button from "./Button";
import Slide from "./Slide";

const GetInTouch = () => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/contact") return null;

    return (
        <Slide
            direction="up"
            className="absolute top-[-190px] mx-[24px] flex h-[379px] rounded-[15px] bg-primary bg-[url('/images/shared/desktop/bg-pattern-call-to-action.svg')] bg-[length:250%] bg-[position:-220px] bg-no-repeat px-[20px] md:top-[-264px] md:h-[350px] md:w-[calc(100%-80px)] md:bg-[length:120%] md:bg-[position:0] lg:top-[-220px] lg:h-[292px] lg:max-w-[1111px] lg:bg-[length:80%] lg:bg-right lg:px-[96px]"
        >
            <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:justify-between">
                <div className="text-center text-white lg:text-left">
                    <p className="mx-auto mb-[16px] w-[250px] text-[32px] font-medium leading-[37px] md:w-[300px] md:text-[40px] lg:mx-0 lg:mb-[20px]">
                        Let’s talk about your project
                    </p>
                    <p className="mb-[35px] text-[15px] md:w-[420px] lg:mb-0">
                        Ready to take it to the next level? Contact us today and
                        find out how our expertise can help your business grow.
                    </p>
                </div>
                <AttentionSeeker effect="tada" delay={1000}>
                    <Button
                        variant="secondary"
                        onClick={() => router.push("/contact")}
                    >
                        Get in touch
                    </Button>
                </AttentionSeeker>
            </div>
        </Slide>
    );
};

export default GetInTouch;
