import React from 'react'
import Box from '@mui/material/Box'
import {alpha, styled} from '@mui/material/styles'

export const GridArea = styled(Box)(({theme, ...other}) => {
  console.log('GridArea.styled.theme',theme)
  console.log('GridArea.styled.other',other)

  return {
    borderRadius: theme.spacing(0.5),
    border: 1,
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.light,
  }
})
