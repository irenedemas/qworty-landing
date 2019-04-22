import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not Found" />
    <Header />
    <div className="NotFound">
      <div className="NotFoundGroup">
        <h1>
          This is not the page you're looking for</h1>
          <p>Go {" "}
          <Link to="/">home</Link>, you're drunk
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
