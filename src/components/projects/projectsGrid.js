import React, { useContext } from "react"
import { useProjectsColumns } from "../../helpers/breakpoints"
import { ProjectCard } from "./projectCard"
import { SimpleGrid } from "@chakra-ui/react"
import { ProjectsContext } from "./projectContext"

export function ProjectsGrid(props) {
  const breakpoint = useProjectsColumns()
  const { filter } = useContext(ProjectsContext)
  return (
    <SimpleGrid
      columns={breakpoint}
      gap={5}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      {props.posts?.edges.map(post => {
        const data = post.node
        if (filter) {
          if (filter === "all")
            return <ProjectCard key={data.ghostId} {...data} />
          else {
            if (post.node?.tags.some(item => item.name === filter)) {
              return <ProjectCard key={data.ghostId} {...data} />
            } else {
              return null
            }
          }
        }
        return <ProjectCard key={data.ghostId} {...data} />
      })}
    </SimpleGrid>
  )
}
