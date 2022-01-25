import { Center, Heading, Text } from "@chakra-ui/react"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Center>
      <Heading>404: Not Found</Heading>
    </Center>
    <Center>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Center>
  </Layout>
)

export default NotFoundPage
