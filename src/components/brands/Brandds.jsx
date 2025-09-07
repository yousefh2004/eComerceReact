import { Box, Card, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Brandds() {
    const [brands,setBrands]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const getbrands =async ()=>{
        try{
            const response =await axios.get(`https://kashop1.runasp.net/api/Customer/Brands`);
            console.log(response);
            setBrands(response.data);
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
        
    }
    useEffect(()=>{
        getbrands();
    },[])
    if(isLoading){
        return(
            <CircularProgress></CircularProgress>
        )
    }
  return (
    
    <Box py={5}>
      <Typography variant="h3" component="h2" gutterBottom style={{fontFamily:"Orbitron",fontWeight:"bold"}}>
        Our Brands
      </Typography>
      <Grid container spacing={3}>
        {brands.map((brand) => (
          <Grid key={brand.id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
              <CardMedia
  component="img"
  image={brand.mainImageUrl}
  alt={`Brand ${brand.id}`}
  sx={{
    filter: 'grayscale(100%) brightness(0.3) sepia(1) hue-rotate(230deg) saturate(400%)',
    transition: 'filter 0.3s',
    '&:hover': {
        cursor:"pointer",
      filter: 'grayscale(100%) brightness(0.4) sepia(1) hue-rotate(230deg) saturate(300%)', // or any filter effect on hover
    },
  }}
/>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
