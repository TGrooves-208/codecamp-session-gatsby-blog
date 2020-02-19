import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default () => (
  <Layout>
    <Title text="Welcome" />

    <p>
      Thanks for stopping by this is a Gatsby project for Boise Code Camp 2020
      that is serverless as it is hosted on AWS
    </p>
    <ArticleList />
  </Layout>
)
