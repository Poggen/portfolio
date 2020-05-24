import React from "react"
import styles from "./blog.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Excerpt = ({ children }) => (
  <div className={styles.content}>
    <img src="https://images.unsplash.com/photo-1531694536735-83e7d4ec2168?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80" alt="Picture" />
    <MDXRenderer>{children}</MDXRenderer>
  </div>
)

export default Excerpt