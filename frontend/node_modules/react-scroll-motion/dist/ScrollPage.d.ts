import { CSSProperties, FC, ReactNode } from "react";
interface ScrollPageProps {
    children: ReactNode | ReactNode[];
    debugBorder?: boolean;
    /**
     * @deprecated `page` number will be assigend automatically. You don't have to set it.
     */
    page?: number;
    style?: CSSProperties;
    className?: string;
}
declare const ScrollPage: FC<ScrollPageProps>;
export default ScrollPage;
