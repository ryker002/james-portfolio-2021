import {
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { BlogCard } from "./blogCard"

export function Blog({ posts }) {
  const breakpoint = useBreakpointValue({ base: 1, md: 3, sm: 2 })
  return (
    <>
      <Heading as="h2" id="#blog">
        Recent Posts
      </Heading>
      <Divider />
      <SimpleGrid columns={breakpoint} gap={5} marginTop={5} marginBottom={5}>
        {posts?.edges.map(post => {
          const data = post.node
          return <BlogCard key={data.ghostId} {...data} />
        })}
      </SimpleGrid>
      <Flex justifyContent={"flex-end"}>
        <Button as={Link} to="/blog" colorScheme={"primary"}>
          See More
        </Button>
      </Flex>
    </>
  )
}
