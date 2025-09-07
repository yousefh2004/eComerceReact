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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { yupResolver } from '@hookform/resolvers/yup';
import registerschema from '../../validations/RegisterSchema';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
export default function Register() {
  const {register,handleSubmit,formState:{errors}}= useForm(
    {resolver:yupResolver(registerschema)
});
const navigate=useNavigate();
  const [isLoading,setIsLoading] =useState(false);
  const [serverError,setServerError]=useState("");
   const [openToast, setOpenToast] = useState(false);
  const onSubmit = async (data)=>{
    try{
      setIsLoading(true);
      const response = await axios.post(`https://kashop1.runasp.net/api/Identity/Account/Register`,data) ;
      console.log(response);
      if (response.status === 200) {
  navigate('/login');
}

    }catch (error) {
    if (error.response) {
      const message =
        error.response?.data?.message || "Unexpected Error...";
      setServerError(message);
      setOpenToast(true);
    } else {
      setServerError("Unexpected Error.....");
    }
    console.log("catch error", error);
  } finally {
    setIsLoading(false);
  }
  }
  return (
    <>
    <Container component="main" maxWidth="xs" style={{ marginTop: 140,backdropFilter: "blur(10px)", 
          WebkitBackdropFilter: "blur(10px)",background: "rgba(92, 92, 92, 0.1)", 
          boxShadow: "0px 10px 30px rgba(0,0,0,0.8)",borderRadius:15,height: Object.keys(errors).length > 0 ? 590 : 510,}}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#820cb4ff', color: '#fff' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2, color: '#fff' }}>
          Sign up
        </Typography>
        <Box
           component="form"
           onSubmit={handleSubmit(onSubmit)}
           noValidate
           sx={{ width: '100%' }}
        >
  <Box  sx={{ display: 'flex', gap: 1, mb: 0 }}>
    <TextField
   {...register("fullName")}
     error={!!errors.fullName}  
     helperText={errors.fullName?.message}
      label="Full Name *"
      autoFocus
      InputLabelProps={{ style: { color: '#fff' } }}
      InputProps={{ style: { color: '#fff' } }}
      sx={{
        flex: 1,
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#fff' },
          '&:hover fieldset': { borderColor: '#ccc' },
          '&.Mui-focused fieldset': { borderColor: '#fff' },
        },
      }}
    />
    <TextField
    {...register("userName")}
      error={!!errors.userName}  
     helperText={errors.userName?.message}
      label="User Name *"
      InputLabelProps={{ style: { color: '#fff' } }}
      InputProps={{ style: { color: '#fff' } }}
      sx={{
        flex: 1,
        mt:0,
        mb:0,
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: '#fff' },
          '&:hover fieldset': { borderColor: '#ccc' },
          '&.Mui-focused fieldset': { borderColor: '#fff' },
        },
      }}
    />
  </Box>
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
  <TextField
    fullWidth
    {...register("phoneNumber")}
    error={!!errors.phoneNumber}  
     helperText={errors.phoneNumber?.message}
    label="Phone Number *"
    id="phoneNumber"
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
    {isLoading? <CircularProgress />:"Sign Up"}
  </Button>
  <Typography
  variant="body2"
  align="center"
  sx={{ mt: 2, color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}
  onClick={() => window.location.href = '/login'} 
>
  Already have an account? Login
</Typography>
</Box>
      </Box>
      
    </Container>
    <Snackbar
      open={openToast}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
      autoHideDuration={3500} 
      onClose={() => setOpenToast(false)}
    >
      <Alert
        onClose={() => setOpenToast(false)}
        severity="error"
        sx={{
          width: 500, 
          fontSize: 16,
          boxShadow: 3,
        }}
        variant="filled"
      >
        {serverError}
      </Alert>
    </Snackbar>
    </>
    
    
  );
}
