import {
  Button,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { useProjectsColumns } from "../../helpers/breakpoints"
import { ProjectsGrid } from "./projectsGrid"
import { ProjectsContext, ProjectsWrapper } from "./projectContext"
import { ProjectFilters } from "./projectFilters"

export function Projects(props) {
  const [filter, setFilter] = useState()
  const { posts } = props
  console.log(props.location)
  if (posts)
    return (
      <>
        <ProjectsContext.Provider value={{ filter, setFilter }}>
          <Flex
            justifyContent={
              props.location?.pathname === "/" ? "space-between" : "flex-end"
            }
            alignItems={"center"}
            mb={2}
          >
            {props.location?.pathname === "/" && (
              <Heading as="h2" id="projects" mb={0}>
                Projects
              </Heading>
            )}
            <ProjectFilters />
          </Flex>
          <Divider />
          <ProjectsGrid
            marginTop={5}
            marginBottom={5}
            posts={posts}
            filter={filter}
          />
          {props.location?.pathname === "/" && (
            <Flex justifyContent={"flex-end"}>
              <Button as={Link} to="/tag/projects" colorScheme={"brand"}>
                See More
              </Button>
            </Flex>
          )}
        </ProjectsContext.Provider>
      </>
    )

  return null
}
