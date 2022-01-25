import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import Logo from "../components/logos/logo"
import Seo from "../components/seo"
import { ImLinkedin2, ImGithub } from "react-icons/im"
import { LogoIcon } from "../components/logos"

function LinksPage({ data }) {
  return (
    <>
      <Seo title="Links" />

      <Box height="100vh" width={"100%"} background={"primary"}>
        <Container maxW="container.xl" padding={5} height={"100%"}>
          <Grid
            templateRows="60px 1fr"
            templateColumns="repeat(1, 1fr)"
            height={"100%"}
          >
            <GridItem as="header" width="100%" height={20}>
              <Link to="/">
                <Logo />
              </Link>
            </GridItem>
            <GridItem
              display="flex"
              flexDirection="column"
              gridGap={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button as={Link} to="/" leftIcon={<Icon as={LogoIcon} />}>
                Website
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/jlewandowski1/"
                target="_blank"
                leftIcon={<ImLinkedin2 />}
              >
                LinkedIn
              </Button>
              <Button
                as={"a"}
                href="https://github.com/ryker002"
                target="_blank"
                leftIcon={<ImGithub />}
              >
                Github
              </Button>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default LinksPage
