import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <div className="NotFound">
      <div className="NotFoundGroup">
        <h1>
          These are not the drones... <br />I mean page, you're looking for</h1>
          <p>Try going{" "}
          <Link to="/">home</Link> and start again
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
