import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

const Home: React.FC = () => {
  const theme = createTheme({ palette: { primary: { main: '#333' } } });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box flexDirection='column' sx={{ display: 'flex', height: '100vh' }}>
        <AppBar
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
          }}
        >
          <Typography component='h1'>LOGO</Typography>
          <IconButton color='inherit'>
            <AccountCircle sx={{ fontSize: 30 }} />
          </IconButton>
        </AppBar>
        <Container component='main' sx={{ bgcolor: '#212121', p: 0, flexGrow: 1, mt: 5 }}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
              </ListItemAvatar>
              <Box width='100%'>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography component='h2'>Sajin Komamura</Typography>
                  <Typography
                    component='span'
                    fontWeight='300'
                    lineHeight={1}
                    fontSize={14}
                    color='#bbb'
                  >
                    8.37pm
                  </Typography>
                </Box>
                <Box
                  color='#fff'
                  width='100%'
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <Typography lineHeight={1} color='#bbb'>
                    fly me to the moon
                  </Typography>
                  <Box sx={{ bgcolor: '#f00', px: '6px', fontSize: 13, borderRadius: '15px' }}>
                    35
                  </Box>
                </Box>
              </Box>
            </ListItem>
          </List>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
