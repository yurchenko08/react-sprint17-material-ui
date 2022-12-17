import React from 'react';
import { Stack, Button } from '@mui/material';
import { Typography } from '@mui/material';
import catImg from '../images/banner-cat1.png';
function Banner() {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }}>
      <div>
        <img style={{ maxWidth: '100%' }} src={catImg} alt='cat-banner' />
      </div>
      <div>
        <Typography variant='subtitle2'>Our motto</Typography>
        <Typography variant='h1'>Help animals</Typography>
        <Typography variant='body'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          soluta architecto consequuntur alias, laudantium molestias dolor
          impedit adipisci quae, quidem corrupti itaque? Quo eaque voluptate
          labore consectetur unde consequatur ad?
        </Typography>
        <div>
          <Button
            sx={{ '&:hover': { color: 'yellow' } }}
            variant='contained'
            size='large'
          >
            Donate
          </Button>
        </div>
      </div>
    </Stack>
  );
}

export default Banner;
