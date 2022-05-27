import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, Grid } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const pages = ['Home', 'Textura'];

const App = () => {
  const jhoowTheme = createTheme({
    palette: {
      primary: {
        light: '#059b5e',
        main: '#059b5e',
        dark: '#059b5e'
      },
      secondary: {
        light: '#059b5e',
        main: '#06CB7A',        
        dark: '#059b5e'
      },
      warning: {
        light: '#059b5e',
        main: '#059b5e',
        dark: '#059b5e'
      },
      success: {
        light: '#059b5e',
        main: '#059b5e',
        dark: '#059b5e'
      },
      error: {
        light: '#059b5e',
        main: '#059b5e',
        dark: '#059b5e'
      },
      info: {
        light: '#059b5e',
        main: '#059b5e',
        dark: '#059b5e'
      }
    },
  });
  
  return (
    <ThemeProvider theme={jhoowTheme}>
      <AppBar position="static" className='theme-primary'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JHOOW
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean()}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            m={2}
            sx={{
              width: '100%',
              height: 300,
              backgroundColor: 'white'
            }}>
              <Typography
              variant="h6"
              sx={{
                mr: 1,
                display: { xs: 'flex' },
                flexGrow: 1,
                fontWeight: 300,
                color: 'gray',
                textDecoration: 'none',
              }}
            >
              Bom! Esse canal tem foco em conteúdos de Minecraft. Nele posto vídeos jogando Bedwars, Skywars, Tutoriais, o intuito é a diversão e o aprendizado.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            m={2}
            sx={{
              width: '100%',
              height: 300,
              backgroundColor: 'white'
            }}>
            <Typography
              variant="h6"
              sx={{
                mr: 1,
                display: { xs: 'flex' },
                flexGrow: 1,
                fontWeight: 300,
                color: 'gray',
                textDecoration: 'none',
              }}
            >
              Bom! Esse canal tem foco em conteúdos de Minecraft. Nele posto vídeos jogando Bedwars, Skywars, Tutoriais, o intuito é a diversão e o aprendizado.
            </Typography>
          </Box> 
        </Grid>
        <Grid item xs={12}>
          <Box
            m={2}
            sx={{
              width: '100%',
              height: 400,
              backgroundColor: 'white'
            }}>
            <Typography
              variant="h6"
              sx={{
                mr: 1,
                display: { xs: 'flex' },
                flexGrow: 1,
                fontWeight: 300,
                color: 'gray',
                textDecoration: 'none',
              }}
            >
              Bom! Esse canal tem foco em conteúdos de Minecraft. Nele posto vídeos jogando Bedwars, Skywars, Tutoriais, o intuito é a diversão e o aprendizado.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default App;
