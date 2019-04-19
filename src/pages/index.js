import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Quote Keyboard" keywords={[`quote`, `keyboard`, `qworty`]} />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Quote Keyboard</h1>
        <p>Instantly find cool quotes to impress your hippest friend</p>
        <button>Get early access</button>
      </div>
    </div>
    <Section
      title="Your new favorite keyboard"
      text="Imagine the Emoji keyboard and a quote database had a baby. Then you’ll have a pretty accurate idea of what to expect from Qworty."
    />
  </Layout>
)

export default IndexPage
