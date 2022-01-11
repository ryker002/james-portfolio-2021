import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import {
  Image,
  Box,
  Heading,
  Container,
  useColorModeValue,
} from "@chakra-ui/react"
import { MetaData } from "../components/meta"
import { GhostWrapper } from "../components/ghostWrapper"
/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Page = ({ data, location }) => {
  const page = data.ghostPage

  if (page)
    return (
      <>
        <MetaData data={data} location={location} type="website" />
        <Helmet>
          <style type="text/css">{`${page.codeinjection_styles}`}</style>
        </Helmet>
        <Layout>
          <Box
            // size="container.lg"
            as="article"
            id={page.tags?.map(e => e.name)}
          >
            <GhostWrapper {...page} />
          </Box>
        </Layout>
      </>
    )
  return null
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`
