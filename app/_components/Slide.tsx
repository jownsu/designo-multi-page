"use client";
import { ReactNode } from "react";
import { Slide as AwesomeSlide, SlideProps } from "react-awesome-reveal";

interface Props extends SlideProps {
    children: ReactNode;
}

const Slide = ({ children, ...props }: Props) => {
    return <AwesomeSlide {...props}>{children}</AwesomeSlide>;
};

export default Slide;
