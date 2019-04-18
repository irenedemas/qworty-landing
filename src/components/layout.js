import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <main>{children}</main>
        <div class="footer">
          © {new Date().getFullYear()} Qworty. Built in Barcelona with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </a>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
