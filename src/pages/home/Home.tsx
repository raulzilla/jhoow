import { Fragment } from 'react';
import { Container, Typography, Avatar, Card, CardContent, Grid, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import bed from './../../assets/image/bed.png';
import bow from './../../assets/image/bow.png';
import diamond_pickaxe from './../../assets/image/diamond_pickaxe.png';
import './Home.css';
import theme from '../../themes';
import Logo from '../../components/logo/Logo';
import Header from '../../components/header/Header';

const prompt = { fontFamily: 'Prompt', fontSize: '1em' }

const Home = () => {  
  return (
    <Fragment>
      <Header title='INICIO'/>
      <Grid container sx={{ padding: { xs: '20px', md: '40px'}}}>
        <Grid item xs={12} md={8} sx={{ padding: { xs: '0', md: '40px'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card sx={{ background: theme.jhoow.palette.primary.main, color: 'white', width: '100%', borderRadius: '40px', position: 'relative', zIndex: '-1' }}>
            <CardContent>
              <Logo type='main'/>
              <Typography align='center' variant='body2' component='div' color='white' sx={prompt}>
                Sobre/Youtube
              </Typography>
              <Container sx={{ display: 'flex', alignItems: 'center', padding: 0, flexDirection: { xs: 'column', md: 'row' } }}>
                <Container sx={{ padding: '0 !important' }}>
                  <Typography variant='body2' color='white' sx={prompt}>Bom! Esse canal tem foco em conteúdos de Minecraft. Nele posto vídeos jogando:</Typography>
                  <ListItem component='div' sx={{ paddingLeft: 0 }}>
                    <ListItemAvatar sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Avatar alt='Cama' src={bed} />
                    </ListItemAvatar>
                    <ListItemText sx={prompt} primary='Bedwars' />
                  </ListItem>
                  <ListItem component='div' sx={{ paddingLeft: 0 }}>
                    <ListItemAvatar sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Avatar alt='Arco' src={bow} />
                    </ListItemAvatar>
                    <ListItemText sx={prompt} primary='Skywars' />
                  </ListItem>
                  <ListItem component='div' sx={{ paddingLeft: 0 }}>
                    <ListItemAvatar sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Avatar alt='Picareta de diamante' src={diamond_pickaxe} />
                    </ListItemAvatar>
                    <ListItemText sx={prompt} primary='Tutoriais' />
                  </ListItem>
                  <Typography variant='body2' color='white' sx={prompt}>O intuito é a diversão e o aprendizado. Para me ajudar a postar vídeos aqui inscreva-se, prometo que você vai gostar! E quando quiser jogar comigo ou com qualquer pessoa, passe lá no servidor do Discord.</Typography>
                </Container>
                <iframe title='skin' className='iframe-skin' frameBorder='0' src='https://minecraft.novaskin.me/embed/5742793569?autoplay=true'></iframe>
              </Container>
            </CardContent>
            <CardContent sx={{ padding: 0 }}>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <svg className='svg' width='100%' viewBox='0 0 1440 400' xmlns='http://www.w3.org/2000/svg' ><path d='M 0,400 C 0,400 0,200 0,200 C 122.14285714285714,213.71428571428572 244.28571428571428,227.42857142857142 358,232 C 471.7142857142857,236.57142857142858 576.9999999999999,232 692,208 C 807.0000000000001,184 931.7142857142858,140.57142857142856 1058,136 C 1184.2857142857142,131.42857142857144 1312.142857142857,165.71428571428572 1440,200 C 1440,200 1440,400 1440,400 Z' stroke='none' strokeWidth='0' fill='#2b2d35ff'></path></svg>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4} sx={{ padding: { xs: '20px', md: '40px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '680px' }}>
          <iframe title='discord' className='iframe-discord' src='https://discord.com/widget?id=837164475018641488&theme=dark' frameBorder='0' sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Home;
