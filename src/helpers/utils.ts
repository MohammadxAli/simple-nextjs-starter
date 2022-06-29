import { IS_DEV, IS_SERVER } from "@/helpers/constants";
import { AxiosRequestConfig } from "axios";

export const scrollToElementById = (id: string) => {
    const element = document.getElementById(id);
    scrollToElement(element);
};

export const scrollToElement = (element: HTMLElement | null, extra = 0) => {
    if (element) {
        let top = 0;
        top = window.pageYOffset + element.getBoundingClientRect().top;
        window.scroll({
            top: top + extra,
            behavior: "smooth",
        });
    }
};

export const scrollToRef = (ref: any, extra = 0) => {
    if (ref?.current) {
        let top = 0;
        if (ref.current) {
            top = window.pageYOffset + ref.current.getBoundingClientRect().top;
        }
        window.scroll({
            top: top + extra,
            behavior: "smooth",
        });
    }
};

export const getLocationWithoutQueries = () => {
    return window.location.href.split("?")[0];
};

export const logRequestedUrl = ({
    baseURL,
    method,
    url,
}: AxiosRequestConfig) => {
    if (baseURL && IS_DEV) {
        const fullUrl = baseURL + url;
        const str = method?.toUpperCase() + " " + fullUrl;
        if (IS_SERVER) {
            console.log("\x1b[36m%s\x1b[0m", str);
        } else {
            console.log(`%c${str}`, "color: #16ffff");
        }
    }
};
