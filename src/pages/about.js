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
          QWORTY is an <a href="https://support.apple.com/en-us/HT202178" target="_blank">iOS keyboard</a> that gives you instant access to thousands
          of quotes from movies, songs, books, memes, you name it. Find, edit and share any quote — no matter the app you're using.
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
