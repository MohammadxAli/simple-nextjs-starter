import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export const getStaticProps = async (_props: GetStaticPropsContext) => {
    return {
        props: { hello: "World" },
        revalidate: 60,
    };
};

export type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export { default } from "@/components/pages/IndexPage";
