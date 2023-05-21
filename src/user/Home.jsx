import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
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
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
