import Link from "next/link";
import { IMG } from "../_constants/constants";

interface Props {
    className?: string;
    category: "APP" | "WEB" | "GRAPHIC";
    small?: boolean;
    href: string;
}

const DesignCard = ({ className, category, href, small = false }: Props) => {

    return (
        <Link
            href={href}
            className={`${className} ${IMG[category][0]} ${IMG[category][1]} ${category === "WEB" && small ? IMG[category][3] : IMG[category][2]} relative flex min-h-[250px] flex-col items-center justify-center rounded-[15px] bg-[size:100%] bg-center p-[30px] before:absolute before:top-0 before:h-full before:w-full before:rounded-[15px] before:bg-black before:opacity-[50%] after:absolute after:top-0 after:h-full after:w-full after:rounded-[15px] after:opacity-[80%] after:hover:bg-primary after:transition-colors hover:bg-[size:130%] hover:transition-all`}
        >
            <h2 className="z-10 mb-[13px] text-[24px] leading-[30px] text-white">
                {category} DESIGN
            </h2>
            <div className="z-10 flex items-center gap-[15px] text-[15px] tracking-[5px] text-white">
                VIEW PROJECTS
                <img src="/images/shared/desktop/icon-right-arrow.svg" />
            </div>
        </Link>
    );
};

export default DesignCard;
