import { Project } from "./Project";

export interface Category {
    slug: string;
    title: string;
    description: string;
    image: string;
    projects: Project[];
    others: OtherCategory[];
}

export interface OtherCategory {
    category: "WEB" | "APP" | "GRAPHIC";
    href: string;
}
