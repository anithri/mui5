import React from "react"
import { Main } from "../styles"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const GridContainer = styled(Main)(({ theme, ...other }) => ({
  display: "grid",
  gridTemplateColumns: `${theme.spacing(48)} 1fr`,
  gridTemplateRows: "auto auto auto 1fr",
  gridTemplateAreas: `"logo chooser" "title display" "nav display" "sidebar display"`,
  gap: theme.spacing(1),
  padding: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.main
}))

export const GridArea = styled(Box)(({ theme }) => {
  return {
    borderRadius: theme.spacing(0.5),
    border: theme.shape.borderRadius,
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.light
  }
})

export const gridAreas = {
  Logo: { gridArea: "logo", component: GridArea },
  Title: { gridArea: "title", component: GridArea },
  Nav: { gridArea: "nav", component: GridArea },
  Sidebar: { gridArea: "sidebar", component: GridArea },
  Chooser: { gridArea: "chooser", component: GridArea },
  Display: { gridArea: "display", component: GridArea }
}
