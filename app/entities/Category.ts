import { Project } from "./Project";

export interface Category {
    slug: string;
    title: string;
    description: string;
    image: string;
    projects: Project[];
}
