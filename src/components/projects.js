import { Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { ProjectCard } from "./projectCard"

export function Projects() {
  const demoPosts = [
    { heading: "Test Post 1" },
    { heading: "Test Post 2" },
    { heading: "Test Post 3" },
    { heading: "Test Post 3" },
    { heading: "Test Post 3" },
    { heading: "Test Post 3" },
    { heading: "Test Post 3" },
    { heading: "Test Post 3" },
  ]
  return (
    <>
      <Heading as="h2">Recent Projects</Heading>
      <Divider />
      <SimpleGrid columns={4} gap={5} marginTop={5} marginBottom={5}>
        {demoPosts.map(e => (
          <ProjectCard {...e} />
        ))}
      </SimpleGrid>
    </>
  )
}
