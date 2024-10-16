import * as React from 'react';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useStore from '../Store';
import CardMedia from '@mui/material/CardMedia';

export default function ProjectAccordionList({ mapRef }) {
  const { projects } = useStore();

  const handleImageClick = (project) => {
    if (mapRef.current) {
      mapRef.current.goToLocation(project.lat, project.lng, project.zoom);
    }
  };

  return (
    <Stack justifyContent='center'>
      <List spacing={1}>
        {projects.length === 0 && (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <Typography sx={{ color: '#C4CDD6' }}>
              No buildings available
            </Typography>
          </Box>
        )}
        {projects.map((proj, index) => (
          <ListItem key={`accordion-${index}`}>
            <Accordion
              key={proj.name}
              title={<Typography>{proj.name}</Typography>}
              expand={true}
              content={
                <Stack sx={{ width: '320px', marginTop: '-8px' }} spacing={2}>
                  {proj.projectInfo[0].image && (
                    <Stack direction='row' justifyContent={'space-between'}>
                      <CardMedia
                        component="img"
                        alt={proj.projectInfo.name}
                        height="240"
                        image={proj.projectInfo[0].image}
                        title={proj.projectInfo[0].name}
                        onClick={() => handleImageClick(proj)}
                        style={{ cursor: 'pointer' }}
                      />
                    </Stack>
                  )}
                  <Stack direction='row' justifyContent={'space-between'}>
                    <Typography>{proj.description}</Typography>
                  </Stack>
                </Stack>
              }
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
