import '@fontsource/allison';
import React from 'react';
import SubMenu from './SubMenu';
import { Button, Hidden, IconButton } from '@mui/material';
import { Toolbar, styled, AppBar, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Divider from '@mui/material/Divider';
import SlidebarMenu from './SlidebarMenu';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const breakpointsUpMd = useMediaQuery('(min-width:900px)');

  const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30,
  });

  const ListAction = styled(Box)({
    display: 'flex',
    gap: 10,
  });

  return (
    <AppBar sx={{ background: 'white' }}>
      <StyleToolbar>
        <Hidden mdUp>
          <IconButton>
            <SlidebarMenu />
          </IconButton>
        </Hidden>
        <SocialBox
          sx={{
            fontSize: '54px',
            fontFamily: 'Allison',
            fontWeight: '500',
            color: 'teal',
          }}
        >
          Cats & friends
        </SocialBox>

        {breakpointsUpMd && (
          <Box>
            <MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <Button sx={{ color: 'black' }}>HOME</Button>
              <Button sx={{ color: 'black' }}>VOLONTEER</Button>
              <SubMenu />
              <Button sx={{ color: 'black' }}>LOGIN</Button>
            </MenuBox>
          </Box>
        )}

        <ListAction
          sx={{
            color: 'gray',
            display: { xs: 'none', sm: 'none', md: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <FavoriteIcon />
          <Divider orientation='vertical' flexItem />
          <PersonIcon />
          <Divider orientation='vertical' flexItem />
          <NotificationsIcon />
        </ListAction>
      </StyleToolbar>
    </AppBar>
  );
};

export default Header;
