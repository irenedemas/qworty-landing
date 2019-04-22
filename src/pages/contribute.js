import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const Contribute = () => (
  <Layout>
    <SEO title="Contribute" />
    <Header />
    <div className="Page">
      <div className="PageGroup">
        <p>QWORTY is preparing for launch. If you would like to be one of the lucky beta testers or contribute in some other way, {" "}
          <a href="mailto:hi@qworty.co">contact us</a>.</p>
      </div>
    </div>
  </Layout>
)

export default Contribute
