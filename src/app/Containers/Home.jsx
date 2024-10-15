import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PrimaryAppBar from '../Components/AppBar/AppBar'; // Adjust the path as necessary
import Map from '../Components/Map';
import SideDrawer from '../Components/Drawer';
// import SwipeableEdgeDrawer from '../Components/DrawerMobile';
import Tooltip from '@mui/material/Tooltip'; // Ensure Tooltip is imported
import Stack from '@mui/material/Stack'; // Ensure Stack is imported
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; // Ensure MenuOutlinedIcon is imported
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery
import ProjectAccordionList from '../Components/ProjectAccordionList';


export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Define isMobile

  const mapComponentRef = useRef(); // Add mapComponentRef

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  // Define triggerGoToLocation function
  const triggerGoToLocation = (lat, lng, zoom) => {
    mapComponentRef.current?.goToLocation(lat, lng, zoom);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PrimaryAppBar onGoToLocation={triggerGoToLocation} />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden', // Ensure no overflow issues
        }}
      >
        <Map ref={mapComponentRef} />
      </Box>
      <IconButton
        sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1000 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <SideDrawer
        side="left"
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        panel={<ProjectAccordionList />}
        projectName=""
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: 'fixed', right: (isDrawerOpen && !isMobile) ? '400px' : '20px', top: '77px' }}
      >
        <Tooltip placement={'left'} title={'Information'}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            selected={isDrawerOpen}
            sx={{ borderRadius: '0px' }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuOutlinedIcon size='inherit' />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
}
