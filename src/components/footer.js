import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
  return (
    <Box as="footer" marginTop={"10em"} padding={5} background={"primary"}>
      <Container
        maxW="container.xl"
        padding={8}
        borderRadius={"md"}
        background={color}
        transform={"translateY(-50%)"}
      >
        <Flex>
          <Link to="/author/james">
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
          </Link>
          <Box padding={5}>
            <Link to="/author/james">
              <Heading marginBottom={0} as="h2" size="xl">
                {profile.name}
              </Heading>
            </Link>
            <Divider />
            <Text marginBottom={1}>{profile.bio}</Text>
            <Text marginBottom={1}>
              <i>Currently Listening to: </i> I'm not a Vampire
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
