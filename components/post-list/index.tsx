import {
  Card,
  SimpleGrid,
  Image,
  CardBody,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { PostsOrPages } from "@tryghost/content-api";
import Link from "next/link";

interface PostListProps {
  posts: PostsOrPages;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <SimpleGrid mt={12} columns={1} spacing="20px">
      {posts.map((post) => (
        <Link href={`/log/${post.slug}`}>
          <Card bg="#221b1b" color="#fff" p={4} key={post.id} variant="coffee">
            <CardBody>
              <Image
                src={post.feature_image || ""}
                alt={post.feature_image_alt || "content image"}
              />
            </CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{post.title}</Heading>
              <Text>{post.excerpt}</Text>
            </Stack>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};
