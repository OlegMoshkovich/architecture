import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';



export default function Logo({scale=1.0}){

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="23" width="84" height="54" stroke="black" stroke-width="6"/>
      <circle cx="30" cy="46" r="5.5" stroke="black" stroke-width="5"/>
      <circle cx="70" cy="46" r="7.5" stroke="black" stroke-width="7"/>
      <rect x="30" y="64" width="40" height="12" fill="black"/>
    </svg>
  </SvgIcon>
)
}


