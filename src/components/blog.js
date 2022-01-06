import { Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { BlogCard } from "./blogCard"

export function Blog() {
  const demoPosts = [
    { heading: "Test Post 1" },
    { heading: "Test Post 2" },
    { heading: "Test Post 3" },
  ]
  return (
    <>
      <Heading as="h2">Recent Posts</Heading>
      <Divider />
      <SimpleGrid columns={3} gap={5} marginTop={5} marginBottom={5}>
        {demoPosts.map(e => (
          <BlogCard {...e} />
        ))}
      </SimpleGrid>
    </>
  )
}
