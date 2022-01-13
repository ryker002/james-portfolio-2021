import { Box, Container, Image } from "@chakra-ui/react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import { GhostWrapper } from "../components/ghostWrapper"
import Layout from "../components/layout"
import { MetaData } from "../components/meta"

const Post = ({ data, location }) => {
  const post = data.ghostPost

  if (post)
    return (
      <>
        <MetaData data={data} location={location} type="series" />
        <Helmet>
          <style type="text/css">{`${post.codeinjection_styles}`}</style>
        </Helmet>
        <Layout>
          <Container
            maxW="container.md"
            as="article"
            id={post.tags?.map(e => e.name)}
          >
            {post.feature_image ? (
              <Box
                as="figure"
                position={"relative"}
                margin={"0 calc(-30vw + 50%) 35px calc(-30vw + 50%)"}
              >
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  rounded="md"
                  boxShadow="md"
                  maxH={800}
                  width="100%"
                />
              </Box>
            ) : null}
            <GhostWrapper {...post} />
          </Container>
        </Layout>
      </>
    )

  return null
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      codeinjection_styles
      title
      html
      feature_image
      tags {
        name
      }
    }
  }
`
