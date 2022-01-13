import { Box, Flex, Heading, Image, Tooltip, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { BsWordpress } from "react-icons/bs"
import { GrGatsbyjs, GrReactjs } from "react-icons/gr"

export function ProjectCard(props) {
  const [hover, setHover] = useState(false)

  const brand = tags => {
    if (tags.some(item => item.name === "zechman design")) {
      return (
        <Tooltip hasArrow label="Personal Project" fontSize="md">
          <Box as="span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.378"
              height="18"
              viewBox="0 0 13.378 18"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,18,6.83,0h4.391L4.468,18Zm8.7-.411V12.942h4.673v4.648Z"
                fill="#fff"
              />
            </svg>
          </Box>
        </Tooltip>
      )
    }
    if (tags.some(item => item.name === "muv")) {
      return (
        <Tooltip hasArrow label="Project developed for müv" fontSize="md">
          <Box as="span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.274"
              height="18.01"
              viewBox="0 0 44.274 18.01"
            >
              <g id="muv" transform="translate(-0.002 -77.065)">
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M112.408,200.077v6.929q0,3,2.367,3t2.368-3v-6.929h2.789v6.991a7.771,7.771,0,0,1-.36,2.5,4.2,4.2,0,0,1-1.2,1.7,5.859,5.859,0,0,1-7.177,0,4.273,4.273,0,0,1-1.227-1.7,6.9,6.9,0,0,1-.347-2.5v-6.991Zm-1.983-3.842a1.653,1.653,0,0,1,.521-1.227,1.766,1.766,0,0,1,2.5,0,1.668,1.668,0,0,1,.52,1.24,1.721,1.721,0,0,1-.52,1.265,1.784,1.784,0,0,1-1.252.508,1.723,1.723,0,0,1-1.265-.52,1.8,1.8,0,0,1-.508-1.265Zm5.181,0a1.653,1.653,0,0,1,.521-1.227,1.734,1.734,0,0,1,1.252-.52,1.777,1.777,0,0,1,1.772,1.76,1.721,1.721,0,0,1-.52,1.265,1.779,1.779,0,0,1-3.025-1.278Z"
                  transform="translate(-90.469 -117.422)"
                  fill="#fff"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M145.693,220.133c-.256-.009-.414-.388-.414-.388-.8-1.664-1.46-3.013-2.261-4.676l-2.931-6.078a6.939,6.939,0,0,0-.611-1.266H142.6l3.124,6.78,3.111-6.78h3.136l-4.784,9.842c-.4.827-.659,1.35-1.061,2.178C146.125,219.746,145.94,220.141,145.693,220.133Z"
                  transform="translate(-107.694 -125.059)"
                  fill="#fff"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M76.618,207.541v-.005a5.785,5.785,0,0,0-.592-.01,4.35,4.35,0,0,0-3.42,1.544,4.343,4.343,0,0,0-3.419-1.544,5.792,5.792,0,0,0-.594.01v.006c-2.675.2-4.232,1.812-4.232,5.084v7.391h2.962v-7.184c0-1.686.544-2.536,1.854-2.558,1.313.022,1.953.872,1.953,2.558v7.184h2.962v-7.184c0-1.688.636-2.538,1.95-2.559,1.313.021,1.857.871,1.857,2.559v7.184h2.962v-7.391C80.863,209.35,79.3,207.743,76.618,207.541Z"
                  transform="translate(-64.361 -124.942)"
                  fill="#fff"
                />
              </g>
            </svg>
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
      overflow="hidden"
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
