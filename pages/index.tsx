import { PostsOrPages } from "@tryghost/content-api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Introduction } from "../components/introduction";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-list";
import { getAllPost } from "../utils/content-api";

interface HomeProps {
  posts: PostsOrPages;
}

export const getStaticProps: GetStaticProps<HomeProps> = async (_context) => {
  const posts = await getAllPost();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <Introduction />

        <PostList posts={posts} />
      </Layout>
    </>
  );
}
