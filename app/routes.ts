import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home/home.tsx"),
    route("education", "routes/Education/Education.tsx"),
    route("projects", "routes/Projects/Projects.tsx"),
    route("experience", "routes/Experience/Experience.tsx"),
    route("contact", "routes/Contact/Contact.tsx"),
] satisfies RouteConfig;
