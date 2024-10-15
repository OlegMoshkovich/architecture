import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close';
import ListSubheader from '@mui/material/ListSubheader';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'; // Correct import for useMediaQuery

const drawerWidth = 380;

export default function SideDrawer({panel, isOpen, setIsOpen, projectName}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        disableEnforceFocus
        anchor='right'
        open={isOpen}
        color='primary'
        elevation={0}
        hideBackdrop
        disableScrollLock
        ModalProps={{
          slots: { backdrop: "div" },
          slotProps: {
            root: { //override the fixed position + the size of backdrop
              style: {
                position: "absolute",
                top: "unset",
                bottom: "unset",
                left: "unset",
                right: "unset",
              },
            },
          },
        }}
        sx={{
          width: isMobile ? '100%' : drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isMobile ? '100%' : drawerWidth,
            backgroundColor: (theme) => theme.palette.background.default,
            boxSizing: 'border-box',
            overflow:'hidden',
            // top: '64px', // Adjust this value to match the AppBar height
          },
        }}
      >
          <Box
            sx={{
              minHeight:'50%',
              overflow: 'scroll'
            }}>
            <List
              spacing={1}
              >
                <ListSubheader>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{height: '40px', marginTop:'16px', marginBottom:'4px'}}
                >
                  <Typography variant='overline' color='primary' sx={{fontSize:'.7rem', fontWeight:'bold'}}>{projectName}</Typography>
                    <IconButton aria-label="comments" size='small' onClick={()=>setIsOpen()}>
                      <CloseIcon fontSize='small'/>
                    </IconButton>
                </Stack>
                </ListSubheader>
                <Stack>
                  <List spacing={1}>
                    {panel}
                  </List>
              </Stack>
            </List>
          </Box>
      </Drawer>
    </Box>
  );
}
