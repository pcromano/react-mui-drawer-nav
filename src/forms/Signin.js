//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'All Rights Reserved'}
    </Typography>
  );
}
const StyledAvatar = styled(Avatar)({
  margin: 'auto',
  backgroundColor: 'red',
});
const StyledPaper = styled(Paper)({
  alignItems: 'center',
  padding: 20,
});
const StyledBox = styled(Box)({
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
})

class SignIn extends React.Component {
  send = () => {
    const method = "POST";
    const body = new FormData(this.form);
    fetch("https://httpbin.org/post", { method, body })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data, null, "\t")));
  }
  render() {
    return (
      <StyledBox>
        <StyledPaper>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            
              <Typography component="h1" variant="h4" align="center">
                Sign In
        </Typography>
        <Box mt={2} >
              <StyledAvatar>
                <LockOutlinedIcon />
              </StyledAvatar>
              </Box>

              <form ref={el => (this.form = el)}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
<Box mt={2}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary" 
                  onClick={() => this.send()}
                >
                  Sign In
          </Button>
          </Box>
          <Box mt={2}>
                <Typography align="center">
                  <Link href="#" variant="body2">
                    Forgot password?
              </Link>
                </Typography>
                </Box>
              </form>

          </Container>
        </StyledPaper>
        <Box mt={5}>
          <Footer />
        </Box>
      </StyledBox>
    );
  }
}

export default SignIn;