import { itemData } from './data';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useMediaQuery from '@mui/material/useMediaQuery';
function Content() {
  const is600px = useMediaQuery('(max-width:899px)');
  const less600px = useMediaQuery('(max-width:600px)');
  const is900px = useMediaQuery('(min-width:900px)');

  return (
    <>
      <h3>Waiting for their owners</h3>
      <ImageList
        variant='masonry'
        cols={(less600px && 1) || (is900px && 3) || (is600px && 2)}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ maxWidth: '100%' }}>
            <img src={`/images/${item.img}`} alt={item.title} loading='lazy' />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{
                    color: 'rgba(255, 255, 255, 0.54)',
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default Content;
