import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Header />
    <div className="Page">
      <div className="PageGroup">
        <p>
          Want to know more about QWORTY? Send us an email to{" "}
          <a href="mailto:hi@qworty.co">hi@qworty.co</a> and persuade us to
          share our dirty secrets.
        </p>
      </div>
    </div>
  </Layout>
)

export default Contact
