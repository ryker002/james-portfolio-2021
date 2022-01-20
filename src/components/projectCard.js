import { Box, Flex, Heading, Image, Tooltip, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { BsWordpress } from "react-icons/bs"
import { GrGatsbyjs, GrReactjs } from "react-icons/gr"
import { LogoIcon, MuvIcon } from "./logos"

export function ProjectCard(props) {
  const [hover, setHover] = useState(false)

  const brand = tags => {
    if (tags.some(item => item.name === "zechman design")) {
      return (
        <Tooltip hasArrow label="Personal Project" fontSize="md">
          <Box as="span">
            <LogoIcon color="white" />
          </Box>
        </Tooltip>
      )
    }
    if (tags.some(item => item.name === "muv")) {
      return (
        <Tooltip hasArrow label="Project developed for müv" fontSize="md">
          <Box as="span">
            <MuvIcon color="white" />
          </Box>
        </Tooltip>
      )
    }
  }
  const platform = tags => {
    if (tags.some(item => item.name === "wordpress")) {
      return (
        <Tooltip hasArrow label="Wordpress" fontSize="md">
          <Box as="span">
            <BsWordpress />
          </Box>
        </Tooltip>
      )
    }
    if (tags.some(item => item.name === "gatsby")) {
      return (
        <Tooltip hasArrow label="Gatsby" fontSize="md">
          <Box as="span">
            <GrGatsbyjs />
          </Box>
        </Tooltip>
      )
    }
    if (tags.some(item => item.name === "react")) {
      return (
        <Tooltip hasArrow label="React" fontSize="md">
          <Box as="span">
            <GrReactjs />
          </Box>
        </Tooltip>
      )
    }
    if (tags.some(item => item.name === "html")) {
      return (
        <Tooltip hasArrow label="HTML5" fontSize="md">
          <Box as="span">
            <AiFillHtml5 />
          </Box>
        </Tooltip>
      )
    }
  }

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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      height={300}
    >
      <a href={props.excerpt && props.excerpt} target="_blank" rel="noreferrer">
        {hover && (
          <VStack position="absolute" width="100%" height="100%">
            <Box
              position="absolute"
              bottom={0}
              right={0}
              background={"primary"}
              width="100%"
              height="100%"
              opacity={0.8}
            />
            <Heading as="h4" zIndex={100} top={5} size="md" color={"white"}>
              {props.title}
            </Heading>
            <Box
              as="section"
              zIndex={100}
              padding={5}
              fontSize={14}
              lineHeight={1.2}
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
            <Flex
              position="absolute"
              bottom={1}
              right={0}
              color={"white"}
              alignItems={"center"}
              justifyContent="space-between"
              width={"100%"}
              paddingLeft={2}
              paddingRight={2}
              zIndex={100}
            >
              {platform(props.tags)}
              {brand(props.tags)}
            </Flex>
          </VStack>
        )}
        <Image
          src={props.feature_image}
          height={"100%"}
          objectFit={"cover"}
          width={"100%"}
        />
      </a>
    </Box>
  )
}
