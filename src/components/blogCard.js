import React from "react"
import {
  Box,
  Image,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Flex,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
// import { Image as GatsbyImage } from "gatsby-image"
import { readingTime as readingTimeHelper } from "@tryghost/helpers"

export function BlogCard(props) {
  const url = `/posts/${props.slug}/`
  const readingTime = readingTimeHelper(props)
  const color = useColorModeValue("gray.100", "gray.800")
  return (
    <Box
      id={props.id}
      rounded={"md"}
      boxShadow={"md"}
      background={color}
      overflow={"hidden"}
      transition={"0.3s ease-in-out"}
      _hover={{
        transform: "translateY(-10px)",
      }}
    >
      {props.feature_image && (
        <GatsbyLink to={url}>
          <Image
            // as={GatsbyImage}
            src={props.feature_image}
            height={300}
            objectFit={"cover"}
            width={"100%"}
          />
        </GatsbyLink>
      )}

      <Box padding={3}>
        <Heading as="h2" size="md" marginBottom={1}>
          {props.title}
        </Heading>
        <Text noOfLines={3}>{props.excerpt}</Text>
        <Flex justifyContent={"space-between"}>
          <Link as={GatsbyLink} color={"primary"} fontWeight={"bold"} to={url}>
            Read More
          </Link>
          <Text size="sm" opacity={0.3} marginBottom={0}>
            {readingTime}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
