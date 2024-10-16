import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tabs from './Tabs'
import { useTheme } from '@mui/material/styles';
import useStore from '../Store';



const drawerBleeding = 80;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
  theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [currentTab, setCurrentTab] = useState(0)
  const {
    project,
    portfolios,
    toggleShowViewer,
  } = useStore();
  console.log('project', project)
  console.log('project --1 ',portfolios[0].projects[project].name )
  const theme = useTheme();


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
  const tabList = [props.projectName]
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: 'visible',
            backgroundColor:  theme.palette.background.default,
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        hideBackdrop
        disableEnforceFocus
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
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
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
                      <Typography sx={{ p: 2, color: 'text.secondary' }}>
                      <Tabs
              tabList = {tabList}
              currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
            />
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            height: '100%',
            overflow: 'auto',
          }}
        >
        {props.panels[currentTab]}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}


SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
