import { NextRequest, NextResponse } from "next/server";
import { DUMMY_PROJECTS } from "@/constants/dummy_projects";

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const project = DUMMY_PROJECTS.find(
        (project) => project.slug === params.slug
    );

    if (!project) {
        return NextResponse.json(
            { message: "Project not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(project);
}
