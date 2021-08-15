import React from "react"
import * as styles from "./blog.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Excerpt = ({ children }) => (
  <div className={styles.content}>
    <MDXRenderer>{children}</MDXRenderer>
  </div>
)

export default Excerpt