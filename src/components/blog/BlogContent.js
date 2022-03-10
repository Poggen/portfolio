import React from "react"
import * as styles from "./blog.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

function Blog({ children }) {
  return (
    <div className={styles.content}>
      <MDXRenderer>{children}</MDXRenderer>
    </div>
  )
}

export default Blog