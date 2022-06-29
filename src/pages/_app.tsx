import "@/styles/css/tailwind.css";
import "@/styles/scss/main.scss";

import { QueryClientProvider } from "react-query";
import { ReactElement, ReactNode } from "react";
import Router from "next/router";
import NProgress from "nprogress";

import type { AppProps } from "next/app";
import { NextPage } from "next";
import useConfigureQueryClient from "@/hooks/common/useConfigureQueryClient";
import { IntlProvider } from "react-intl";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type CustomAppProps = AppProps & {
    Component: NextPageWithLayout;
};

function App(props: CustomAppProps) {
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    const queryClient = useConfigureQueryClient();

    return (
        <IntlProvider locale="en">
            <QueryClientProvider client={queryClient}>
                {getLayout(<Component {...pageProps} />, pageProps)}
            </QueryClientProvider>
        </IntlProvider>
    );
}

export default App;
