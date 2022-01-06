import React from "react"
import { Box, Image, Heading, Text, Link } from "@chakra-ui/react"

export function BlogCard({ image, heading, content, link }) {
  return (
    <Box
      rounded={"md"}
      boxShadow={"md"}
      background={"gray.800"}
      overflow={"hidden"}
      transition={"0.3s ease-in-out"}
      _hover={{
        transform: "translateY(-10px)",
      }}
    >
      <Image src={image} height={300} objectFit={"cover"} width={"100%"} />
      <Box padding={3}>
        <Heading as="h2" size="md" marginBottom={1}>
          {heading}
        </Heading>
        <Text noOfLines={3}>{content}</Text>
        <Link color={"primary"} fontWeight={"medium"} to={link}>
          Read More
        </Link>
      </Box>
    </Box>
  )
}

BlogCard.defaultProps = {
  image: "https://source.unsplash.com/random",
  heading: "Blog Post Title",
  content:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
}
