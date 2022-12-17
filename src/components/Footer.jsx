import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Grid container alignItems='center' sx={{ backgroundColor: 'grey' }}>
      <Grid item lg={6} md={12} sx={{ marginLeft: '100' }}>
        <h3>About us</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          quam doloremque nam deserunt ut iste voluptate provident vitae quia ea
          architecto velit ratione voluptatibus nisi, ipsum reiciendis debitis
          nostrum corrupti!
        </div>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </Grid>

      <Grid item sm={6} xs={12} lg={3}>
        <h4>Information</h4>
        <ul style={{ listStyle: 'none' }}>
          <li>Lorem ipsum</li>
          <li>Privacy&Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </Grid>

      <Grid item sm={6} xs={12} lg={3}>
        <h4>My account</h4>
        <ul style={{ listStyle: 'none' }}>
          <li>Initiatives and projects</li>
          <li>Favorite animalas</li>
          <li>MyAccount</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Footer;
