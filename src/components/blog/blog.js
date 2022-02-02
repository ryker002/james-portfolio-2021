import { Button, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { useBlogColumns } from "../../helpers/breakpoints"
import { BlogCard } from "./blogCard"

export function Blog({ posts }) {
  const breakpoint = useBlogColumns()

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
