import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

const Button = ({ children, className, variant = "primary", ...props }: Props) => {
    let button_style =
        "h-[56px] w-[152px] tracking-[1px] text-[15px] hover:bg-primary_light duration-200 rounded-lg uppercase font-medium ";

    if (variant === "primary") {
        button_style += "bg-primary text-white";
    } else {
        button_style += "bg-white text-black hover:text-white";
    }

    return (
        <button {...props} className={`${button_style} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
