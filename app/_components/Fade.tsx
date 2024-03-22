"use client";
import React from "react";
import { Fade as AwesomeFade, FadeProps } from "react-awesome-reveal";

interface Props extends FadeProps {
    children: React.ReactNode;
}

const Fade = ({ children, ...props }: Props) => {
    return <AwesomeFade {...props}>{children}</AwesomeFade>;
};

export default Fade;
