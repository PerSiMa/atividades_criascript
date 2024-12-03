"use client"
import { Container, Button, ButtonGroup, Box } from "@mui/material";
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Pedro() {

  const [contador, setContador] = useState(0);

  function subtrair() {
    return (
        setContador(contAnterior => contAnterior - 1) 
    );
  }

  function adicionar() {
    return (
      setContador(contAnterior => contAnterior + 1)
    );
  }
      

  return (

    <>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 3, fontSize: 35, fontWeight: 'bold', height: '100vh'}}>

           <Box> Clique para somar ou subtrair </Box>

          <ButtonGroup sx={{ height: 90 }} variant="contained" aria-label="Basic button group" size="large">
            <Button sx={{ borderRadius: 4 }} onClick={subtrair}> <RemoveIcon sx={{ fontSize: 50 }} /> </Button>
          <Button sx={{ fontSize: 35, width: 95 }}> { contador } </Button>
            <Button sx={{ borderRadius: 4 }} onClick={adicionar}> <AddIcon sx={{ fontSize: 50 }} /> </Button>
          </ButtonGroup>
      </Container>
    </>

  )
}
