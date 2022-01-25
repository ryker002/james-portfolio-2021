import React from "react"
import Layout from "../components/layout"
import {
  Box,
  Heading,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  InputGroup,
  InputLeftAddon,
  Textarea,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react"

function ContactMe({ data, location }) {
  const color = useColorModeValue("gray.100", "gray.800")
  return (
    <>
      <Layout>
        <Box marginBottom={8}>
          <Heading as="h1" size="2xl" color="primary" textAlign={"center"}>
            Contact
          </Heading>
        </Box>
        <Box
          borderRadius="md"
          background={color}
          boxShadow="md"
          padding={5}
          position="relative"
          display={"flex"}
          flexWrap={"wrap"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <form
            method="POST"
            action="https://getform.io/f/2d5ec6d7-5fde-4a41-a71b-68f85739b182"
          >
            <SimpleGrid columns={2} row={1} gap={8}>
              <FormControl mb={1} isRequired>
                <FormLabel htmlFor="name">Your Name.</FormLabel>
                <Input id="name" type="name" />
              </FormControl>
              <FormControl mb={1} isRequired>
                <FormLabel htmlFor="email">Email address.</FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
            </SimpleGrid>
            <FormControl mb={5} isRequired>
              <FormLabel htmlFor="website">Message.</FormLabel>
              <Textarea id="message" type="message" />
            </FormControl>
            <Center>
              <Button type="submit" colorScheme={"brand"}>
                Submit
              </Button>
            </Center>
          </form>
        </Box>
      </Layout>
    </>
  )
}

export default ContactMe
