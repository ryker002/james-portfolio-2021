import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { BsChevronDown } from "react-icons/bs"
import { useProjectsColumns } from "../helpers/breakpoints"
import { ProjectCard } from "./projectCard"
import { LogoIcon, MuvIcon } from "./logos"
import { ChevronDownIcon } from "@chakra-ui/icons"

export function Projects({ posts }) {
  const breakpoint = useProjectsColumns()
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Heading as="h2" id="projects">
          Projects
        </Heading>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Clients
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Icon as={LogoIcon} mr="12px" color={"white"} />
                Personal
              </MenuItem>
              <MenuItem
                as={"a"}
                href="https://www.muvideas.com"
                target={"_blank"}
                rel="norefferer"
              >
                <Icon as={MuvIcon} color="white" boxSize={"36px"} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
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
