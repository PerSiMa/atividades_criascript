"use client";
import * as React from 'react';
import { Container, Button, ButtonGroup, Box, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Precisei usar essa opção "use client" por estar passando funções diretamente no client-side do programa, li sobre tanto no chat GPT quanto no próprio doc
// do Next.js que passar funções diretamente no client-side do programa pode gerar problemas de segurança
// mas ainda não consigo imaginar exemplos que poderiam ocorrer devido a essa falta de serialização e callback


// Tentei criar uma palheta personalizada para a cor do Text Field e consegui parcialmente, a cor dela no momento em que não esta clicada
// continua cinza ao invés de branco

// Declarei a nova palheta customizada
declare module '@mui/material/styles' {
  interface Palette {
    branco: Palette['primary'];
  }

  interface PaletteOptions {
    branco?: PaletteOptions['primary'];
  }
}

// Declarei a nova palheta como uma opção disponível para os Props do TextField 
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    branco: true;
  }
};

// Criei meu tema junto da palheta nova
const theme = createTheme({
  palette: {
    branco: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
  },
});

// Declaração do ItemData
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function Pedro() {

  const [age, setAge] = React.useState('');

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [value, setValue] = React.useState(0);

  const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (


    <>

      <Container>
        <TabContext value={value}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', borderBottom: 1, borderColor: 'divider' }}>
            <TabList color="white" onChange={handleChange2} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Container>

      <Container>
        <Typography> /\ TabList acima não sei como colocar ele em branco, nem o fundo /\ </Typography>
      </Container>

      <Container sx={{ height: '1', p: 0, justifyContent: 'center', display: 'flex' }}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>Botão 1</Button>
          <Button>Botão 2</Button>
          <Button>Botão 3</Button>
        </ButtonGroup>
      </Container>

      {/* Com uso de theme-providers seria bem mais tranquilo manipular essas boxes dentro do Grid, mas não consegui entender muito o funcionamento delas */}
      {/* fazendo o famoso CTRL C + CTRL V eu conseguiria bons resultados mas sendo sincero, sem conseguir compreende-lo muito bem, então deixei de lado */}
      {/* com o objetivo de testar outros componentes mais básicos */}

      {/* Envelopei o Container todo com um ThemeProvider pois fiz uso do tema customizado na cor do meu Text Field */}
      <ThemeProvider theme={theme}>
        <Container sx={{ height: '1', p: 0, marginTop: '10px' }}>
          <Box
            sx={{
              width: 1,
              height: 1,
              borderRadius: 2,
              bgcolor: '#0091ea',
              p: 2
            }} >

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: 0.5 }}>
                <Grid container spacing={2}>
                  <Grid size={9.5}>
                    {/* Utilizei o tema customizado aqui no color="Branco" */}
                    <TextField sx={{ width: '1', height: '1' }} id="outlined-basic" label="Pesquisar" color="branco" variant="outlined" />
                  </Grid>
                  <Grid size={2.5}>
                    <Box
                      sx={{
                        width: 1,
                        height: 1,
                        borderRadius: 2,
                        bgcolor: '#FFFFFF',
                        p: 0,
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                      <SearchIcon sx={{ color: 'gray', fontSize: '52px' }} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid size={8}>
                <Box
                  sx={{
                    width: 1,
                    height: 20,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 5
                  }}
                />
              </Grid>
              <Grid size={4}>
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 2
                  }}
                />
              </Grid>
              <Grid size={4}>
                <Box
                  sx={{
                    width: 1,
                    height: 20,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 5
                  }}
                />
              </Grid>
              <Grid size={8}>
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 2
                  }}
                />
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    width: 1,
                    height: 20,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 5
                  }}
                />
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 2
                  }}
                />
              </Grid>
              <Grid size={8}>
                <Box
                  sx={{
                    width: 1,
                    height: 20,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 5
                  }}
                />
              </Grid>
              <Grid size={4}>
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    borderRadius: 1,
                    bgcolor: '#26c6da',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    p: 2
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>

      <Container sx={{ marginTop: '10px' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Container sx={{ height: '1', p: 0, justifyContent: 'center', display: 'flex' }}>
        <Typography> \/ Select abaixo não sei como colocar ele em branco, nem o fundo \/ </Typography>
      </Container>

      <Container>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange1}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>


    </>



  )
}