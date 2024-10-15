import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '../Dialog';
import Link from '@mui/material/Link';
import LogoAFit from '../LogoAFit';
import Button from '@mui/material/Button';
import useStore from '../../Store'; // Import the store

const About = () => (
  <Stack spacing={2}>
    <Typography variant='body1' color='default'>
      This is a record of important buildings we encountered so far.
    </Typography>
    <Typography variant='body1' color='default'>
      Created by
      <br/>
      <Link href="https://www.analogfuture.xyz">Analog Future</Link>
    </Typography>
  </Stack>
);

const ProjectButtons = ({ onGoToLocation }) => {
  const projects = useStore((state) => state.projects);
  const currentProject = useStore((state) => state.currentProject);
  const setCurrentProject = useStore((state) => state.setCurrentProject);

  return (
    <Stack spacing={1}>
      {projects.map((project, index) => (
        <Button
          key={index}
          variant={currentProject?.name === project.name ? "contained" : "outlined"} // Highlight current project
          size="small"
          sx={{ borderRadius: '0px' }}
          onClick={() => {
            setCurrentProject(project); // Set current project on click
            onGoToLocation(project.lat, project.lng, project.zoom); // Zoom to the selected project
          }}
        >
          {project.name}
        </Button>
      ))}
    </Stack>
  );
};

const LeftSide = ({ onGoToLocation }) => {
  return (
    <Stack direction='row' alignItems="center" spacing={1} sx={{ marginLeft: '-8px' }}>
      <Dialog
        iconButton={true}
        labelBold={false}
        buttonLabel='Analog Future'
        tabs={false}
        icon={<LogoAFit/>}
        dialogTitle={
          <Stack alignItems={'center'} justifyContent={'center'} direction='row' spacing={1}>
            <Typography sx={{ border: '1px solid lightgrey', padding: '2px 10px' }}>
              Important Buildings
            </Typography>
          </Stack>
        }
        dialogContent={<About />}
      />
      <Dialog
        actionTitle={'OK'}
        buttonLabel={'Buildings'}
        buttonColor={'primary'}
        tabs={false}
        noTitle={true}
        tabList={['Recent']}
        dialogTitle={
          <Typography sx={{ border: '1px solid lightgrey', padding: '2px 10px', textAlign: 'center' }}>
            Buildings
          </Typography>
        }
        dialogContent={<ProjectButtons onGoToLocation={onGoToLocation} />} // Pass the function to ProjectButtons
      />
    </Stack>
  );
};

export default LeftSide;
