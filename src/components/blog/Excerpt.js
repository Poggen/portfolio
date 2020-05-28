import React from "react"
import styles from "./blog.module.css"
import Link from "../link/Link"

const Excerpt = ({ title, date, url }) => (
  <div className={styles.excerpt}>
    <Link url={url} title={title}></Link>
    <span className={styles.meta}>{date}</span>
  </div>
)

export default Excerpt