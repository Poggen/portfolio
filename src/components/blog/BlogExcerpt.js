import React from "react"
import * as styles from "./blog.module.css"
import Link from "../link/Link"

const BlogExcerpt = ({ title, date, url }) => (
  <div className={styles.excerpt}>
    <Link url={url} title={title} paddingBottom={false}></Link>
    <span className={styles.meta}>{date}</span>
  </div>
)

export default BlogExcerpt