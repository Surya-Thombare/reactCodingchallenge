import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setphoneNumber] = React.useState('');
    const [profession, setProfession] = React.useState('');
    const [password, setPassword] = React.useState('');

  const handleChange = (event) => {
    setProfession(event.target.value);
  };
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);

    let user = {
      name : data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      profession: data.get('profession'),
      password: data.get('Password'),
    }

    localStorage.setItem('user', JSON.stringify(user));
    // eslint-disable-next-line no-console
    console.log({
      name : data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      profession: data.get('profession'),
      password: data.get('Password'),
    });
    <Navigate to="/login" />
    console.log('working?');
  };


  if (localStorage.getItem('user')) return <Navigate to="/login" />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone number"
                  name="phoneNumber"
                  autoComplete="Phone number"
                />
              </Grid>
              <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="Profession"
                value={profession}
                label="Profession"
                name='profession'
                onChange={handleChange}
                required
                fullWidth
                >
                <MenuItem selected disabled value=""><em>Placeholder</em></MenuItem>
                <MenuItem value='Developer'>Developer</MenuItem>
                <MenuItem value='Data scientist'>Data scientist</MenuItem>
                <MenuItem value='DigitalMarketing'>Digital Marketing</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}