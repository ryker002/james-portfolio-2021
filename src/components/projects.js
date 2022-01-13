import { Button, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { useProjectsColumns } from "../helpers/breakpoints"
import { ProjectCard } from "./projectCard"

export function Projects({ posts }) {
  const breakpoint = useProjectsColumns()
  return (
    <>
      <Heading as="h2" id="projects">
        Projects
      </Heading>
      <Divider />
      <SimpleGrid columns={breakpoint} gap={5} marginTop={5} marginBottom={5}>
        {posts?.edges.map(post => {
          const data = post.node
          return <ProjectCard key={data.ghostId} {...data} />
        })}
      </SimpleGrid>
      <Flex justifyContent={"flex-end"}>
        <Button as={Link} to="/projects" colorScheme={"primary"}>
          See More
        </Button>
      </Flex>
    </>
  )
}
