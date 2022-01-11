import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import Logo from "./logos/logo"

function Header({ siteTitle }) {
  const { colorMode, toggleColorMode } = useColorMode()

  function changeTheme() {
    toggleColorMode()
  }

  const navLinks = useColorModeValue("white", "gray.900")

  return (
    <>
      <Flex
        as="header"
        height={180}
        background={"primary"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        marginBottom={5}
      >
        <IconButton
          colorScheme="transparent"
          onClick={changeTheme}
          position={"absolute"}
          top={5}
          right={5}
          icon={
            colorMode === "light" ? (
              <BsFillSunFill color="#fff" size="22" />
            ) : (
              <BsFillMoonFill color="#fff" size="22" />
            )
          }
        />
        <Container maxW="container.xl">
          <Link to="/">
            <Flex alignItems={"center"} gridGap={3}>
              <Logo style={{ display: "inline-block" }} />{" "}
              <Heading
                as="h1"
                margin={0}
                color={"white"}
                size="2xl"
                color="transparent"
                css={`
                  -webkit-text-stroke-color: #fff;
                  -webkit-text-stroke-width: 2px;
                  text-decoration: none;
                `}
              >
                {siteTitle}
              </Heading>
            </Flex>
          </Link>
        </Container>
      </Flex>
      <Box
        maxW={500}
        margin={"0 auto"}
        rounded={"md"}
        boxShadow={"md"}
        paddingTop={2}
        paddingBottom={2}
        transform={"translateY(-100%)"}
        background={navLinks}
      >
        <SimpleGrid columns={3} row={1}>
          <Center>
            <Button as="a" variant="ghost" href="#resume">
              Resume
            </Button>
          </Center>
          <Center>
            <Button as={Link} variant="ghost" to="/tag/blog">
              Blog
            </Button>
          </Center>
          <Center>
            <Button as={Link} variant="ghost" to="/tag/projects">
              Projects
            </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
