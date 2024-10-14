import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import PrimaryAppBar from '../Components/AppBar/AppBar'; // Adjust the path as necessary
import Box from '@mui/material/Box';
import Map from '../Components/Map';

export default function Home() {
  const mapComponentRef = useRef();
  const triggerGoToLocation = (lat, lang) => {
    mapComponentRef.current?.goToLocation(lat, lang);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PrimaryAppBar />
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
    </div>
  );
}
