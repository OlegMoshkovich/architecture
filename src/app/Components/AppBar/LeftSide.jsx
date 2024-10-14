import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '../Dialog';
import Link from '@mui/material/Link';
import LogoAFit from '../LogoAFit';



const About = () => (
  <Stack spacing={2}>
    <Typography variant='body1' color='default'>
      A.F. is a record of significant buildings we encountered so far.
    </Typography>
    <Typography variant='body1' color='default'>
      Created by
      <br/>
      <Link href="https://www.analogfuture.xyz">Analog Future</Link>
    </Typography>
  </Stack>
);

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
              Architecture.Fit
            </Typography>
          </Stack>
        }
        dialogContent={<About />}
      />
      <Dialog
        actionTitle={'OK'}
        buttonLabel={'Architecture'}
        buttonColor={'primary'}
        tabs={false}
        tabList={['Recent']}
        dialogTitle={
          <Typography sx={{ border: '1px solid lightgrey', padding: '2px 10px' }}>
            Buildings
          </Typography>
        }
        dialogContent={<div>hi</div>}
      />
    </Stack>
  );
};

export default LeftSide;
