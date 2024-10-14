import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function PrimaryAppBar({ darkTheme, changeTheme, onGoToLocation }) {

  return (
    <AppBar
      color='secondary'
      elevation={0}
    >
      <Toolbar>
        <LeftSide onGoToLocation={onGoToLocation} />
        <Box sx={{ flexGrow: 1 }} />
        <RightSide onGoToLocation={onGoToLocation} />
      </Toolbar>
    </AppBar>
  );
}
