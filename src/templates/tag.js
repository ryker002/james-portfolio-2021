import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { BlogCard } from "../components/blogCard"
import Layout from "../components/layout"
import { MetaData } from "../components/meta"
import Pagination from "../components/pagination"
import { ProjectCard } from "../components/projectCard"
import { useBlogColumns, useProjectsColumns } from "../helpers/breakpoints"

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag
  const posts = data.allGhostPost.edges
  const projectBreakpoint = useProjectsColumns()
  const blogBreakpoint = useBlogColumns()

  const type = tag => {
    if (tag === "Projects" || tag === "wordpress" || tag === "gatsby")
      return "projects"
    return "blog"
  }
  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
        <Box marginBottom={8}>
          <Heading as="h1" size="2xl" color="primary" textAlign={"center"}>
            {tag.name}
          </Heading>
          {tag.description ? <Text>{tag.description}</Text> : null}
          <Divider />
        </Box>
        <SimpleGrid
          as="section"
          columns={
            type(tag.name) === "projects" ? projectBreakpoint : blogBreakpoint
          }
          gap={5}
        >
          {posts.map(({ node }) => {
            if (type(tag.name) === "projects")
              return <ProjectCard key={node.ghostId} {...node} />
            // The tag below includes the markup for each post - components/common/PostCard.js
            return <BlogCard key={node.ghostId} {...node} />
          })}
        </SimpleGrid>
        <Pagination pageContext={pageContext} />
      </Layout>
    </>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
