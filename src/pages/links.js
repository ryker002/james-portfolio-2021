import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import Logo from "../components/logos/logo"
import Seo from "../components/seo"

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
            <GridItem alignItems={"center"} justifyContent={"center"}>
              Hello
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default LinksPage
