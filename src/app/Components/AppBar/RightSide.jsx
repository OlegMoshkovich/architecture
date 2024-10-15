import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '../Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoAF from '../LogoAF';

const AboutShare = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Stack sx={{ overflow: 'scroll' }} spacing={2}>
      <Typography variant='body1' color='default' sx={{ paddingBottom: '12px' }}>
        We are an agency based in Berlin.
      </Typography>
    </Stack>
  );
};

const RightSide = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0}
      sx={{ marginRight: '-15px' }}
    >
      <Dialog
        iconButton={true}
        labelBold={false}
        buttonLabel='Analog Future'
        tabs={false}
        tabList={['Info']}
        icon={<LogoAF size='inherit' color='primary' />}
        dialogTitle={
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            direction='row'
            spacing={1}
          >
            <LogoAF />
          </Stack>
        }
        dialogContent={<AboutShare />}
      />
    </Stack>
  );
};

export default RightSide;
