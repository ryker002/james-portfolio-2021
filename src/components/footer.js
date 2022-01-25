import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { BiBook } from "react-icons/bi"
import { IoMdMusicalNotes } from "react-icons/io"
import { useLastFM } from "use-last-fm"

const CurrentlyPlaying = () => {
  const lastFM = useLastFM("gryovex", process.env.GATSBY_LASTFM_API)

  if (lastFM.status === "error") {
    return null
  }

  if (lastFM.status !== "playing") {
    return (
      <Flex gridGap={3} alignItems={"center"}>
        <IoMdMusicalNotes />
        <Text marginBottom={0} fontSize="sm">
          Not Listening to Anything
        </Text>
      </Flex>
    )
  }

  return (
    <Flex gridGap={3} alignItems={"center"}>
      <IoMdMusicalNotes />
      <Text marginBottom={0} fontSize="sm">
        Listening to{" "}
        <Box as="span" color="primary">
          {lastFM.song.name}
        </Box>{" "}
        by{" "}
        <Box as="span" color="primary">
          {lastFM.song.artist}
        </Box>
      </Text>
    </Flex>
  )
}

export function Footer({ location }) {
  const data = useStaticQuery(graphql`
    {
      ghostAuthor {
        ghostId
        id
        name
        slug
        profile_image
        bio
      }
    }
  `)
  const profile = data.ghostAuthor
  const color = useColorModeValue("gray.100", "gray.800")
  const authorBox = useBreakpointValue({
    base: { flexFlow: "column nowrap", alignItems: "center" },
    md: { flexFlow: "row nowrap" },
  })
  const ContainerOverlap = useBreakpointValue({
    base: "translateY(-25%)",
    md: "translateY(-50%)",
  })
  return (
    <Box as="footer" marginTop={"10em"} padding={5} background={"primary"}>
      <Container
        maxW="container.xl"
        padding={8}
        borderRadius={"md"}
        background={color}
        transform={ContainerOverlap}
      >
        <Flex {...authorBox}>
          <Image
            borderRadius="full"
            width={150}
            height={150}
            objectFit={"cover"}
            src={profile.profile_image}
            alt={profile.name}
            border={"3px solid"}
            borderColor={"primary"}
          />
          <Box padding={5}>
            <Heading marginBottom={0} as="h2" size="xl">
              {profile.name}
            </Heading>

            <Divider />
            <Text marginBottom={1}>{profile.bio}</Text>
            <Text marginBottom={1}>
              <CurrentlyPlaying />
              <Flex gridGap={3} alignItems={"center"}>
                <BiBook />
                <Text marginBottom={0} fontSize="sm">
                  Reading{" "}
                  <Box as="span" color="primary">
                    The Dark Tower Book 2{" "}
                  </Box>
                  by{" "}
                  <Box as="span" color="primary">
                    Stephen King
                  </Box>
                </Text>
              </Flex>
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW="container.xl" color={"white"}>
        © {new Date().getFullYear()} James Zechman
      </Container>
    </Box>
  )
}
