"use client";
import { ReactNode } from "react";
import {
    AttentionSeeker as AwesomeAttentionSeeker,
    AttentionSeekerProps
} from "react-awesome-reveal";

interface Props extends AttentionSeekerProps {
    children: ReactNode;
}

const AttentionSeeker = ({ children, ...props }: Props) => {
    return (
        <AwesomeAttentionSeeker {...props}>{children}</AwesomeAttentionSeeker>
    );
};

export default AttentionSeeker;
