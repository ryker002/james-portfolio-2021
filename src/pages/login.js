import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

function LoginPage({ data, location }) {
  const color = useColorModeValue("gray.100", "gray.800")
  const size = useBreakpointValue({ base: "100%", md: "50%", lg: "33%" })

  const defaultBoxProps = {
    borderRadius: "md",
    background: color,
    boxShadow: "md",
    padding: 5,
    maxW: size,
    margin: "30px auto",
  }
  return (
    <Layout>
      <Seo title="Login" />
      <Box {...defaultBoxProps}></Box>
    </Layout>
  )
}

export default LoginPage
