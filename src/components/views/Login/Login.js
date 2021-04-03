import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const Login = () => (
  <Container component="main" maxWidth='xs'>
    <CssBaseline />
    <div className={styles.paper}>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
          Sign in
      </Typography>
      <form className={styles.form} noValidate>
        <TextField
          fullWidth
          required
          variant="standard"
          name="email"
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          margin="normal"
        />
        <TextField
          fullWidth
          required
          variant="standard"
          name="password"
          id="password"
          label="Password"
          autoComplete="password"
          autoFocus
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          href={process.env.PUBLIC_URL + '/'}
        >
            Sign In
        </Button>
      </form>
    </div>
  </Container>
);

export default Login;