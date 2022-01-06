import { Box, Container } from "@chakra-ui/react"
import React from "react"

export function Footer() {
  return (
    <Box as="footer" marginTop={8} padding={5} background={"primary"}>
      <Container maxW="container.xl">
        © {new Date().getFullYear()} James Zechman
      </Container>
    </Box>
  )
}
