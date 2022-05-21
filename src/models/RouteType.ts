import { ReactNode } from "react";

export type RouteType = {
    path: string;
    label: string;
    element: ReactNode;
    authenticated?: boolean;
    user?: boolean;
    admin?: boolean;
}