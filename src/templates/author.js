import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import { BlogCard as PostCard } from "../components/blogCard"
import { MetaData } from "../components/meta"
import {
  Image,
  Box,
  Heading,
  Container,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import { CgWebsite, CgFacebook, CgTwitter } from "react-icons/cg"
import { FiGithub } from "react-icons/fi"

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Author = ({ data, location, pageContext }) => {
  const author = data.ghostAuthor
  const posts = data.allGhostPost.edges
  const twitterUrl = author.twitter
    ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}`
    : null
  const facebookUrl = author.facebook
    ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}`
    : null

  return (
    <>
      <MetaData data={data} location={location} type="profile" />
      <Layout>
        <Box
          as="header"
          background="gray.800"
          borderRadius={"md"}
          padding={5}
          marginTop={"5em"}
        >
          <Flex>
            {author.profile_image && (
              <Image
                maxW={400}
                objectFit={"cover"}
                flex={1}
                src={author.profile_image}
                alt={author.name}
                borderRadius={"full"}
                transform={"translateY(-30%)"}
                border={"3px solid"}
                borderColor={"primary"}
                sx={{
                  aspectRatio: "1/1",
                }}
              />
            )}
            <Box flex={2} padding={5}>
              <Heading as="h1" color="primary">
                {author.name}
              </Heading>
              {author.bio && <Text>{author.bio}</Text>}
            </Box>
          </Flex>
          <Flex justifyContent={"flex-end"} gridGap={2}>
            {author.website && (
              <IconButton
                as="a"
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                icon={<CgWebsite />}
              />
            )}
            {twitterUrl && (
              <IconButton
                as="a"
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<CgTwitter />}
              />
            )}
            {facebookUrl && (
              <IconButton
                as="a"
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<CgFacebook />}
              />
            )}
            <IconButton
              as="a"
              href={"https://github.com/ryker002"}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FiGithub />}
            />
          </Flex>
        </Box>
        <SimpleGrid columns={3} mt={5}>
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <PostCard key={node.id} {...node} />
          ))}
        </SimpleGrid>
        <Pagination pageContext={pageContext} />
      </Layout>
    </>
  )
}

Author.propTypes = {
  data: PropTypes.shape({
    ghostAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover_image: PropTypes.string,
      profile_image: PropTypes.string,
      website: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Author

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
