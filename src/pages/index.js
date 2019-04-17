import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Quote Keyboard</h1>
    <p>Instantly find cool quotes to impress your hippest friend</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
