import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Blog } from "../components/blog"
import { Projects } from "../components/projects"
import { graphql } from "gatsby"
import { Resume } from "../components/resume"

export const query = graphql`
  {
    posts: allGhostPost(
      limit: 3
      filter: { tags: { elemMatch: { name: { eq: "Blog" } } } }
    ) {
      edges {
        node {
          feature_image
          excerpt
          ghostId
          id
          reading_time
          title
          slug
        }
      }
    }
    projects: allGhostPost(
      limit: 8
      filter: { tags: { elemMatch: { name: { eq: "Projects" } } } }
    ) {
      edges {
        node {
          feature_image
          excerpt
          ghostId
          id
          reading_time
          title
          slug
          tags {
            name
          }
        }
      }
    }
  }
`

function IndexPage({ data }) {
  const { posts, projects } = data
  return (
    <Layout>
      <Seo title="Home" />
      <Projects posts={projects} />
      <Resume />
      <Blog posts={posts} />
    </Layout>
  )
}

export default IndexPage
