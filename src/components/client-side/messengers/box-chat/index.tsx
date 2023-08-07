import {
  AddCircle,
  Apps,
  PermMedia,
  PlusOne,
  Send,
  ThumbUp,
} from '@mui/icons-material';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import List from '@mui/material/List';
import moment from 'moment';

interface BoxChatProps {}

const BoxChat = (props: BoxChatProps) => {
  const {
    palette: {
      customTheme: { background },
      primary,
      text,
    },
  } = useTheme();

  const onSendMessage = () => {};

  return (
    <Stack spacing={0} direction="column" sx={{ width: 1 }}>
      <>asdadasdasd</>
      <Stack
        direction="column"
        sx={{
          bgcolor: '#FFF',
          height: 'calc(100vh - 70px - 70px)',
          width: 1,
          overflow: 'auto',
        }}
      >
        <Stack
          direction="column"
          spacing={0}
          sx={{
            pt: 2,
            position: 'sticky',
            top: 0,
            left: 0,
            backgroundColor: '#FFF',
            zIndex: 10,
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
            }}
          >
            <Typography variant="h5">Chat</Typography>
            <Stack direction="row" spacing="1">
              <IconButton>
                <RateReviewIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <VideocamIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <BrightnessLowIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Stack>
          <Box sx={{ px: 2, display: 'none' }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: 15 },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Divider sx={{ pt: 2 }} />
        </Stack>
        <List sx={{ zIndex: 5, px: 1 }}>
          {messages.map((mes) => (
            <Box
              key={mes.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: mes.isMe ? 'row-reverse' : 'row',
                mb: 1,
              }}
            >
              <Avatar
                src="/images/hoangvi.jpg"
                sx={{ height: 35, width: 35 }}
              />
              <Typography
                variant="body1"
                sx={{
                  alignSelf: 'right',
                  maxWidth: 450,
                  mx: 2,
                  py: 1,
                  px: 1.5,
                  bgcolor: mes.isMe ? background.message1 : background.message2,
                  borderRadius: 4,
                  color: mes.isMe ? primary.contrastText : text.primary,
                }}
              >
                {mes.content}
              </Typography>
              <Typography variant="caption">{mes.time}</Typography>
            </Box>
          ))}
        </List>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{ p: 2, mt: 0, bgcolor: 'background.paper' }}
      >
        <IconButton onClick={onSendMessage}>
          <AddCircle />
        </IconButton>
        <IconButton onClick={onSendMessage}>
          <Apps />
        </IconButton>
        <IconButton onClick={onSendMessage}>
          <PermMedia />
        </IconButton>
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            sx: { borderRadius: 15 },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onSendMessage}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton onClick={onSendMessage}>
          <ThumbUp />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default BoxChat;

const messages = [
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: true,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: true,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: true,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
  {
    id: 1,
    content:
      'The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
  {
    id: 1,
    content: 'The Menu component uses the Popover component internally. ',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: true,
  },
  {
    id: 1,
    content: 'The Menu component uses the ',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
];
