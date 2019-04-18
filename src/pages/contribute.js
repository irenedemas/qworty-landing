import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../pages/about"
import Contact from "../pages/contact"
import Section from "../components/Section"

const Contribute = () => (
  <Layout>
    <SEO title="Contribute" />
    <Header />
    <div className="Page">
      <div className="PageGroup">
        <p>Provide Feedback</p>
        <p>Buy us a coffee</p>
      </div>
    </div>
  </Layout>
)

export default Contribute
