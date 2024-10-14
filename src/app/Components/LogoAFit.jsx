import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';


export default function Logo({scale=1.0}){

return(
  <SvgIcon sx={{transform: `scale(${scale})`}}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="23" width="84" height="54" stroke="black" stroke-width="6"/>
    </svg>
  </SvgIcon>
)
}


