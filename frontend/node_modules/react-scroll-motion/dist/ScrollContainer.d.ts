import { FC, ReactNode, CSSProperties } from "react";
interface ScrollContainerProps {
    snap?: "none" | "proximity" | "mandatory";
    children: ReactNode | ReactNode[];
    scrollParent?: Window | HTMLElement;
    style?: CSSProperties;
    className?: string;
}
declare const ScrollContainer: FC<ScrollContainerProps>;
export default ScrollContainer;
