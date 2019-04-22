import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Header />
    <div className="Page">
      <div className="PageGroup">
        <p>
          QWORTY is an iOS keyboard that gives you instant access to thousands
          of quotes so you can easily find, edit and share them — no matter the
          platform you're using.
        </p>
        <p>
          TL;DR <br />
          Imagine the Emoji keyboard and a quote database had a baby. That’s
          QWORTY.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
