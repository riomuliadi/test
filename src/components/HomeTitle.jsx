import { Typography, Box } from '@mui/material';
import React from 'react';

const HomeTitle = () => {
  return (
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' // Menggunakan tinggi penuh layar
      }}
    >
      <Typography 
        color="black" 
        sx={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}
      >
        Selamat Datang Di Sistem Pakar Diagnosa Penyakit Jantung
      </Typography>
    </Box>
  );
}

export default HomeTitle;