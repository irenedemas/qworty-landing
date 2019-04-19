import React from "react"
import { Link } from "gatsby"

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
          Long story short: Qworty is an iOS keyboard that gives you access
          +10,000 quotes so you can easily find, edit and share them — no matter
          the platform you're using.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
