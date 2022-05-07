import { Container } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const SignIn: React.FC = () => {
  return (
    <Container component='main' sx={{ pt: 28, maxWidth: 330 }}>
      <Typography component='h1' textAlign='center' paddingY={2} fontSize={22} fontWeight={600}>Sign In</Typography>
      <TextField fullWidth size='small' label='username' placeholder='username' />
      <Button startIcon={<GoogleIcon />} variant='contained' sx={{ mt: 2 }} fullWidth>
        Sign In with Google
      </Button>
    </Container>
  );
};

export default SignIn;
