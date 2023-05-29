import {
  AppBar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import Field from './Field';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const curUser = JSON.parse(user);

  const handleSubmit = () => {
    dispatch(authActions.logoutUser());
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={handleSubmit}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid
        container
        component="main"
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} lg={6}>
          <Card
            sx={{
              my: 8,
              mx: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#eee',
            }}
          >
            <Typography sx={{ fontSize: 30, color: 'gray' }}>
              Welcome back
            </Typography>
            <Box m={2} width="100%">
              <Divider />
            </Box>
            <Field
              item="name"
              value={curUser.name}
              props={{ textTransform: 'uppercase' }}
            />
            <Field item="Email" value={curUser.email} />
            <Grid container>
              <Grid item xs={12}></Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
