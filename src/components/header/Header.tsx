import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.css';
import { ReactComponent as LogoIcon } from './../../assets/image/logo.svg';
import React from 'react'

const pages = [{
  name: 'inicio',
  router: '/'
},{
  name: 'texturas',
  router: '/texture'
},{
  name: 'clients',
  router: '/clients'
}];

const Header = (props: { title: string }) => {
  const navigate = useNavigate()
  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNav = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  
  const handleCloseNav = () => {
    setAnchorNav(null);
  };

  return (
    <Fragment>
      <AppBar position='static' sx={{ margin: { xs: '15px 20px 0', md: '30px 60px 0' } }} className='header'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{justifyContent: { xs: 'space-between'}}}>
            <Link to={'/'}><LogoIcon className='img'/></Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => {page.name ? navigate(page.router) : navigate('/')}}
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Poppins' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label='menu'
              onClick={handleOpenNav}
              sx={{
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNav}
            >
              {pages.map((pages) => (
                <MenuItem key={pages.name} onClick={handleCloseNav}>
                  <Link className='link' to={pages.router}><Typography textAlign='center'>{pages.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar component='div' position='static' sx={{ margin: { xs: '15px 20px 0', md: '30px 60px 0' } }} className='header'>
        <Toolbar>
          <Typography align='center' variant='h6' component='div' sx={{ flexGrow: 1, fontFamily: 'Poppins', fontSize: '2em' }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Header