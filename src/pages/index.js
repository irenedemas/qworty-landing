import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Quote Keyboard" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Quote Keyboard</h1>
        <p>Instantly find cool quotes to impress your hippest friend</p>
        <Link to="/page-2/">Tell me more</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
