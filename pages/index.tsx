import { GetStaticProps } from "next";
import { Introduction } from "../components/introduction";
import { Layout } from "../components/layout";
import { getAllPost } from "../utils/content-api";

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPost();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

export default function Home() {
  return (
    <>
      <Layout>
        <Introduction />
      </Layout>
    </>
  );
}
