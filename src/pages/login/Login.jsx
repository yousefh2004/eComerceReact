import * as React from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { yupResolver } from '@hookform/resolvers/yup';
import loginschema from '../../validations/LoginSchema';
import { useState } from 'react';
export default function Login() {
  const {register,handleSubmit,formState:{errors}}= useForm(
    {resolver:yupResolver(loginschema)
});
  const [isLoading,setIsLoading] = useState(false);
  const onSubmit = async (data)=>{
    try{
      setIsLoading(true);
      const response = await axios.post(`https://kashop1.runasp.net/api/Identity/Account/Login`,data) ;
      console.log(response.data);
    }catch (error) {
    if (error.response) {
      console.error("❌ Server error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("❌ No response received:", error.request);
    } else {
      console.error("❌ Request setup error:", error.message);
    }
  } finally {
    setIsLoading(false);
  }
  }
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: 190,backdropFilter: "blur(10px)", 
          WebkitBackdropFilter: "blur(10px)",background: "rgba(92, 92, 92, 0.1)", 
          boxShadow: "0px 10px 30px rgba(0,0,0,0.8)",borderRadius:15,height: Object.keys(errors).length > 0 ? 430 : 380,}}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#820cb4ff', color: '#fff' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 0, color: '#fff' }}>
          Sign In
        </Typography>
        <Box
           component="form"
           onSubmit={handleSubmit(onSubmit)}
           noValidate
           sx={{ width: '100%' }}
        >
  <TextField
    fullWidth
    id="email"
    label="Email Address *"
    {...register("email")}
    error={!!errors.email}  
     helperText={errors.email?.message}
    margin="normal"
    InputLabelProps={{ style: { color: '#fff' } }}
    InputProps={{ style: { color: '#fff' } }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#fff' },
        '&:hover fieldset': { borderColor: '#ccc' },
        '&.Mui-focused fieldset': { borderColor: '#fff' },
      },
    }}
  />
  <TextField
    fullWidth
    {...register("password")}
    error={!!errors.password}  
     helperText={errors.password?.message}
    label="Password *"
    type="password"
    id="password"
    margin="normal"
    InputLabelProps={{ style: { color: '#fff' } }}
    InputProps={{ style: { color: '#fff' } }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#fff' },
        '&:hover fieldset': { borderColor: '#ccc' },
        '&.Mui-focused fieldset': { borderColor: '#fff' },
      },
    }}
  />
  <Button
    type="submit"
    fullWidth
    disabled={isLoading}
    variant="contained"
    sx={{
      mt: 3,
      backgroundColor: '#820cb4ff',
      color: '#fff',
      '&:hover': { backgroundColor: '#3a0351ff' },
    }}
  >
    {isLoading? <CircularProgress />:"Sign In"}
  </Button>
  <Typography
  variant="body2"
  align="center"
  sx={{ mt: 2, color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}
  onClick={() => window.location.href = '/register'} 
>
  Don’t have an account? Sign Up
</Typography>
</Box>
      </Box>
    </Container>
  );
}
