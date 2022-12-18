import * as React from 'react';
import { Fragment, useState } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, ListItemText, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { Button, List} from '@mui/material';
import {Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



const SlidebarMenu = () => {

    const [state, setState] = useState({
 
        left: false,
   
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
            
                    <Box 
                        onKeyDown={toggleDrawer(anchor, false)}
                        sx={{backgroundColor:'#004953', height: '100%'}}
                     >
                        <List sx={{color:'white', margin: 3, pr: 1, pb: 1, width: '250px'}}>
                            <ListItem><ListItemText primary='Home' /></ListItem>
                            <ListItem><ListItemText primary='Volonteer' /></ListItem>
                            <ListItem><Accordion>
                                <AccordionSummary sx={{color:'white',backgroundColor:'#004953', width: '250px', pl: 0, display: 'flex'}}
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white'}} />}    
                                >
                                    <Typography>Stories</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#004953', color: 'white', pr: 5 }}>
                                     <Typography sx={{ borderTop: "1px solid", padding: 1}}>Blog</Typography>
                                     <Typography sx={{ borderTop: '1px solid', padding: 1}}>Podcast</Typography>
                                </AccordionDetails>
                            </Accordion>
                            </ListItem>
                            <ListItem><ListItemText primary='Login' /></ListItem>
                            <ListItem><ListItemText primary='Contact Us' /></ListItem>
                        </List>
                    </Box>
        );
        return (
            <Box>
            {['left'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer('left', true)}><MenuIcon color='black' /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Fragment>
                ))}
            </Box>
        );
    }
    export default SlidebarMenu;
