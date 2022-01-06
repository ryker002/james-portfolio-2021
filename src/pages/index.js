import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Blog } from "../components/blog"
import { Projects } from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Blog />
    <Projects />
  </Layout>
)

export default IndexPage
