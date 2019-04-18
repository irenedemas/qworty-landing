import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Quote Keyboard" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Quote Keyboard</h1>
        <p>Instantly find cool quotes to impress your hippest friend</p>
        <button>Get early access</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
