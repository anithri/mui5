/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import theme from "../styles/Theme"
import {Helmet} from "./Helmet"
import '../styles/layout.css'
export const Layout = ({ title, Grid, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Helmet title={title} />
      <ThemeProvider theme={theme}>
        <Grid {...props} />
      </ThemeProvider>
    </>
  )
}
Layout.defaultProps = {
  Grid: 'div'
}
Layout.propTypes = {
  title: PropTypes.string
}
