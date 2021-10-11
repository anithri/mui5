import * as React from "react"
import { Layout } from "../components/Layout"

import { GridContainer, gridAreas } from "../components/DisplayPageGrid"
import { Logo } from '../components/Logo'
import { Title } from '../components/Title'
import { Nav } from '../components/Nav'
import { Sidebar } from '../components/Sidebar'
import { Chooser } from '../components/Chooser'
import { Display } from '../components/Display'
const IndexPage = () => (
  <Layout Grid={GridContainer} bgcolor="theme.primary.dark">
    <Logo {...gridAreas.Logo} />
    <Title {...gridAreas.Title} />
    <Nav {...gridAreas.Nav} />
    <Sidebar {...gridAreas.Sidebar} />
    <Chooser {...gridAreas.Chooser} />
    <Display {...gridAreas.Display} />
  </Layout>
)

export default IndexPage
