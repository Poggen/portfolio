import React from "react"
import * as styles from "./casestudy.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Case = ({ children }) => (
  <div className={styles.content}>
    <MDXRenderer>{children}</MDXRenderer>
  </div>
)

export default Case