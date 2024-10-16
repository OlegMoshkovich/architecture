'use client'
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Tabs from './Tabs'
import {Stack} from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

export default function Dialog({
  buttonLabel='dialog',
  iconButton=false,
  labelBold=true,
  noTitle=false,
  icon,
  buttonColor='primary',
  dialogTitle='dialog',
  dialogContent='sample content',
  dialogContent1='sample content 1',
  dialogContent2='sample content 2',
  dialogContent3='sample content 3',
  tabs=false,
  tabList= ['tab 1', 'tab 2', 'tab 3'],
  actionTitle='ok',
}) {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const theme = useTheme()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      {iconButton ?
        <IconButton aria-label="edit" size='large' onClick={handleClickOpen} sx={{border:'none'}}>
          {icon}
        </IconButton>:
        <Button variant="contained" size='small' sx={{borderRadius:'0px', fontWeight:labelBold?'bold':''}} onClick={handleClickOpen} color={buttonColor}>
          {buttonLabel}
        </Button>
      }
      <MuiDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default, // Style specifically for the Paper component
          }
        }}
      >
        {!noTitle &&
          <DialogTitle id="alert-dialog-title" >
            {dialogTitle}
          </DialogTitle>
        }
        <DialogContent
          sx={{maxWidth:'300px', paddingBottom:'10px'}}
        >
          <DialogContentText id="alert-dialog-description">
            <Stack spacing={1}>
              {tabs &&
               <Tabs
                tabList = {tabList}
                currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
              />
              }
            <Typography variant={'body1'}>
              {tabs && currentTab===0 && dialogContent1}
              {tabs && currentTab===1 && dialogContent2}
              {tabs && currentTab===2 && dialogContent3}
              {!tabs && React.cloneElement(dialogContent, { onClose: handleClose })}
            </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center the button horizontally
            // padding: '0px 20px 14px 20px',
          }}
        >
          <Button variant="outlined" size='small' onClick={handleClose}>{actionTitle}</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
