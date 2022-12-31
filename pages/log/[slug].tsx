import { Heading, Text, Image, Divider, Box, Link } from "@chakra-ui/react";
import { PostOrPage } from "@tryghost/content-api";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import { Layout } from "../../components/layout";
import { getAllPost, getPost } from "../../utils/content-api";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPost();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
};

interface PostPageProps {
  post: PostOrPage;
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context
) => {
  const slug = context.params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const post = await getPost(slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    // Passed to the page component as props
    props: { post },
  };
};

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Box mb={6}>
        <Link as={NextLink} href="/">
          &lt; Go back
        </Link>
      </Box>

      <Heading mb={12}>{post.title}</Heading>

      <Image
        src={post.feature_image || ""}
        alt={post.feature_image_alt || "post image"}
        mb={6}
      />

      <Box px={60} my={12}>
        <Divider />
      </Box>

      <Text dangerouslySetInnerHTML={{ __html: post.html as string }} />
    </Layout>
  );
}
