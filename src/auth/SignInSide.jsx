import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Img from '../assets/im2.jpg';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ugafia
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [showPassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login) {
      console.log(loginData);
    } else if (!login) {
      console.log(signUpData);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {login ? 'Sign in' : 'Create account'}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {login ? (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={loginData.email}
                    onChange={(event) =>
                      setLoginData((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={loginData.password}
                    onChange={(event) =>
                      setLoginData((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }))
                    }
                    autoComplete="current-password"
                  />
                </>
              ) : (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="text"
                    autoFocus
                    value={signUpData.name}
                    onChange={(event) =>
                      setSignUpData((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    value={signUpData.email}
                    onChange={(event) =>
                      setSignUpData((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    value={signUpData.password}
                    onChange={(event) =>
                      setSignUpData((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }))
                    }
                  />
                </>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={showPassword}
                    onChange={handleClickShowPassword}
                  />
                }
                label="Show Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {login ? 'Sign In' : 'Create Account'}
              </Button>
              <Grid
                container
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={toggleLogin}
                  >
                    {login
                      ? "Don't have an account? Sign Up"
                      : 'Already have an account? Sign In '}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
