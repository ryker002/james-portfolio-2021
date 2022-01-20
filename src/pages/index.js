import { graphql } from "gatsby"
import * as React from "react"
import { Blog } from "../components/blog"
import Layout from "../components/layout"
import { Projects } from "../components/projects"
import { Resume } from "../components/resume"
import Seo from "../components/seo"

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
          html
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
  const hasPosts = posts.edges.length > 0
  return (
    <Layout>
      <Seo title="Home" />
      <Projects posts={projects} />
      <Resume />
      {hasPosts && <Blog posts={posts} />}
    </Layout>
  )
}

export default IndexPage
