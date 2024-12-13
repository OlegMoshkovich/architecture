import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';



export default function Logo({scale=1.0}){

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="84" height="54" stroke="black" stroke-width="6"/>
      <circle cx="65" cy="26" r="7.5" stroke="black" stroke-width="7"/>
      <circle cx="25" cy="26" r="7.5" stroke="black" stroke-width="7"/>
      <rect x="25" y="44" width="40" height="12" fill="black"/>
    </svg>
  </SvgIcon>
)
}


