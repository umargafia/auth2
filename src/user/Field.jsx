import { Grid, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Field = ({ item, value, props: props }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display={{ xs: 'block', sm: 'flex' }}
        alignItems="center"
      >
        <Typography
          sx={{ fontSize: { xs: 20, sm: 30, md: 40 } }}
          color="gray"
          textTransform="capitalize"
        >
          {item}:
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 20, sm: 30, md: 35 } }}
          ml={3}
          color={(theme) => theme.palette.secondary.main}
          {...props}
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Field;
