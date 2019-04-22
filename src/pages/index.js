import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Quote Keyboard" keywords={[`quote`, `keyboard`, `qworty`]} />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>QWORTY Keyboard</h1>
        <p>
          Find the right quote at the right time, <br />
          every single time
        </p>
        <button>Get early access</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
