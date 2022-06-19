import { Fragment, useState } from 'react'
import { InputAdornment, Grid, FormControl, InputLabel, OutlinedInput, Paper, Card, CardHeader, CardContent, CardMedia, Button, CardActions, Typography, Skeleton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FlagIcon from '@mui/icons-material/Flag';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Header from '../../components/header/Header'
import './CardsDownload.css'
import theme from '../../themes'
import cardsDownloadTypes from '../../types/cardsDownload.types';
import { useNavigate } from 'react-router';

const center = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}

const gridMain = {
  ...center,
  flexDirection: 'row'
}

const text = { 
  color: 'white',
  fontFamily: 'Poppins' 
}

const helpDiscord = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: {
    xs: 'center',
    md: 'flex-end'
  },
  margin: '0 60px'
}

const card = {
  display: {
    xs: 'block',
    sm: 'flex'
  }, 
  flexDirection: 'row', 
  alignItems: 'flex-start'
}

const CardsSkeleton = (quantity: number) => {
  return (
    <>
      {[...Array(quantity)].map((_, index) => {
        return (
          <Grid key={index} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '40px'}}>
            <Skeleton sx={{ borderRadius: '10px', margin: '0 10px' }} variant='rectangular' width={'100%'} height={335} />
          </Grid>
        )
      })}
    </>
  )
}

const CardsDownload = (props: { title: string, data: cardsDownloadTypes.Data[], id?: string }) => {
  const navigate = useNavigate()
  const [valueInput, setValueInput] = useState<string>('')

  const dataSearch = props.data.filter(item => item.titulo.toUpperCase().includes(valueInput.toUpperCase()))

  const idFilter = props.data.filter(item => item.id.includes(props.id ? props.id : '0'))

  if (props.id && idFilter.length <= 0) {
    navigate('/')
  }

  return (
    <Fragment>
      <Header title={props.title}/>
      {!props.id && 
        <Grid className='header' xs={12} sx={{...gridMain, margin: { xs: '15px 20px 0', md: '30px 60px 0' } }}>
          <Paper sx={{ background: theme.jhoow.palette.primary.main, width: { xs: '70%', md: '50%'} }}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel sx={text} htmlFor='outlined-adornment-pesquisar'>Pesquisar</InputLabel>
              <OutlinedInput
                type='text'
                onChange={(e) => setValueInput(e.target.value)}
                sx={text}
                endAdornment={
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                }
                label='Pesquisar'
              />
            </FormControl>
          </Paper>
        </Grid>
        }
      <Grid className='header' xs={12} sx={{...helpDiscord, margin: { xs: '15px 20px 0', md: '30px 60px 0' }}}>
        <Button onClick={() => window.open('https://discord.gg/crWdG7XbJv', '_blank')} endIcon={<FlagIcon />}>Está com problemas?</Button>
      </Grid>
      <Grid
        container
        sx={props.id ? { ...card, justifyContent: 'center'} : { ...card, justifyContent: 'flex-start'}}
      > 
        {props.id && idFilter.map((item, index) => (
          <Grid sm={6} md={4} sx={{ padding: '20px' }} key={`card-${index}`}>
            <Card sx={{ padding: '12px', background: theme.jhoow.palette.primary.main, borderRadius: '10px' }}>
              <CardContent sx={{ background: theme.jhoow.palette.primary.dark, borderRadius: '10px' }}>
                <CardMedia
                  component='img'
                  image={item.linkImagem}
                />
              </CardContent>
              <CardContent sx={{ padding: 0, whiteSpace: 'nowrap', textAlign: 'center' }}>
                <CardHeader
                  className='card-text'
                  title={`${item.titulo}`}
                  subheader={`${item.subtitulo}`}
                />
              </CardContent>
              <CardActions sx={center}>
                <Button className='button' onClick={() => window.open(`${item.linkDownload}`, '_blank')}  size='small' endIcon={<FileDownloadIcon />}>Download</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {!props.id && dataSearch.map((item, index) => (
          <Grid sm={6} md={4} sx={{ padding: '20px' }} key={`card-${index}`}>
            <Card sx={{ padding: '12px', background: theme.jhoow.palette.primary.main, borderRadius: '10px' }}>
              <CardContent sx={{ background: theme.jhoow.palette.primary.dark, borderRadius: '10px' }}>
                <CardMedia
                  component='img'
                  image={item.linkImagem}
                />
              </CardContent>
              <CardContent sx={{ padding: 0, whiteSpace: 'nowrap', textAlign: 'center' }}>
                <CardHeader
                  className='card-text'
                  title={`${item.titulo}`}
                  subheader={`${item.subtitulo}`}
                />
              </CardContent>
              <CardActions sx={center}>
                <Button className='button' onClick={() => window.open(`${item.linkDownload}`, '_blank')}  size='small' endIcon={<FileDownloadIcon />}>Download</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {props.id && dataSearch.length <= 0 && !valueInput && CardsSkeleton(1)}
        {!props.id && dataSearch.length <= 0 && !valueInput && CardsSkeleton(9)}
      </Grid>
      {dataSearch.length <= 0 && valueInput && 
        <Grid
          container
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '150px'}}
        >
          <Typography component='h3' sx={text}>NENHUM RESULTADO ENCONTRADO PARA '{valueInput}'...</Typography>
        </Grid>
      }
    </Fragment>
  )
}

export default CardsDownload