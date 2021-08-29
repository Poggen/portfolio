import React from "react"
import * as styles from "./casestudy.module.css"
import Link from "../link/Link"

const CaseExcerpt = ({ title, date, url }) => (
  <div className={styles.excerpt}>
    <Link url={url} title={title}/>
  </div>
)

export default CaseExcerpt