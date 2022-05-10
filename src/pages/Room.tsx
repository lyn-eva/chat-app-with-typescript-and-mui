import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDb } from '../dbProvider';
import { ctxTypes } from '../types';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import OutlinedInput from '@mui/material/OutlinedInput';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';

const msg = [
  { msg: '2 plus 2 is four' },
  { msg: 'minus 1 is 3, quick maths' },
  { msg: 'everyday men in the block hjh jhkj hjhk hjhk' },
  { msg: 'smoke trees' },
  { msg: 'hold tight Azeni' },
];

const Room = () => {
  const navigate = useNavigate();
  const { messages, sendMsg, user } = useDb() as ctxTypes;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMsg = () => {
    console.log(inputRef.current);
    const msg = inputRef.current?.value.trim();
    if (!msg) return;
    sendMsg(msg);
  };

  return (
    <>
      <CssBaseline />

      <AppBar sx={{ flexDirection: 'row', py: 1 }}>
        <Button onClick={() => navigate(-1)}>
          <KeyboardBackspace sx={{ color: '#fff', fontSize: 30 }} />
        </Button>
        <Box width='100%' sx={{ display: 'flex', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'orange' }}>ZL</Avatar>
          <Box color='#fff'>
            <Typography component='h2'>Sajin Komamura</Typography>
            <Typography component='span' fontWeight='300' lineHeight={1} fontSize={14} color='#bbb'>
              8.37pm
            </Typography>
          </Box>
        </Box>
      </AppBar>
      <Box
        component='main'
        sx={{ pb: 9, display: 'flex', gap: 2, flexDirection: 'column-reverse', height: '100vh' }}
      >
        {messages.map((item, i) => (
          <Snackbar
            open={true}
            key={item.id}
            sx={{ position: 'static', px: 1, alignSelf: item.user === user ? 'flex-end' : 'flex-start' }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            message={item.msg}
          />
        ))}
      </Box>
      <Box
        sx={{ display: 'flex', gap: 1, alignItems: 'center', width: '100%', px: 1 }}
        position='fixed'
        bottom={10}
      >
        <OutlinedInput
          inputRef={inputRef}
          size='small'
          placeholder='Message'
          sx={{ bgcolor: '#333', color: '#fff', flexGrow: 1 }}
        />
        <Button
          onClick={handleSendMsg}
          variant='contained'
          sx={{ borderRadius: '5%', width: '2.5rem', height: '2.5rem' }}
        >
          <SendIcon sx={{ fontSize: 25 }} />
        </Button>
      </Box>
    </>
  );
};

export default Room;
