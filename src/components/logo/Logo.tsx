
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

const Logo = (props: { type: 'main' | 'header'}) => {
  if (props.type === 'main') {
    return (
      <Typography 
        align='center' 
        variant='h3'
        noWrap
        sx={{
          fontFamily: 'Chewy',
          color: 'white',
        }}
      >
        The Jhoow
      </Typography>
    )
  }

  return (
    <Fragment>
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'Chewy',
          lineHeight: 1.3,
          height: '80px',
          fontSize: '4em',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        &nbsp;THE JHOOW
      </Typography>
      <Typography
        variant='h5'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'Chewy',
          lineHeight: 1.3,
          height: '80px',
          alignItems: 'center',
          fontSize: '2em',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        &nbsp;THE JHOOW
      </Typography>
    </Fragment>
  );
};

export default Logo;