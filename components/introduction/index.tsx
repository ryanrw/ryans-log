import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Introduction = () => {
  return (
    <Card bg="#221b1b" color="#fff" p={4}>
      <Flex alignItems="center">
        <Avatar width="60" height="60" src="/avatar/ryan.jpg" />

        <Box ml={4}>
          <Heading mb={2}>Hello, สวัสดีครับ! 👋</Heading>
          <Heading mb={2}>I'm Ryan!</Heading>
          <Text fontSize="xl">
            This is Ryan's story log where every miserable memory will be logged
            here!
          </Text>
          <Text fontSize="xl">It's nice to see you here 🧑🏽‍💻</Text>
        </Box>
      </Flex>
    </Card>
  );
};
