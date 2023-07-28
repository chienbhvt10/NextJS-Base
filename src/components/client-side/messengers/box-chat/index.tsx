import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VideocamIcon from '@mui/icons-material/Videocam';
import moment from 'moment';
import { Send } from '@mui/icons-material';

interface BoxChatProps {}

const BoxChat = (props: BoxChatProps) => {
  const {
    palette: {
      customTheme: { background },
      primary,
      text,
    },
  } = useTheme();

  return (
    <Stack spacing={0} direction="column" sx={{ width: 1 }}>
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
          spacing={2}
          sx={{
            py: 1,
            position: 'sticky',
            top: 0,
            left: 0,
            backgroundColor: '#FFF',
            zIndex: 10,
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', mb: 1, px: 2 }}
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
          <Box sx={{ px: 2, display: 'hidden' }}>
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
          <Divider />
        </Stack>
        <List sx={{ zIndex: 5, px: 2 }}>
          {messages.map((mes) => (
            <Box
              key={mes.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Avatar sx={{ height: 35, width: 35 }} />
              <Typography
                variant="body1"
                sx={{
                  alignSelf: 'right',
                  maxWidth: 450,
                  mx: 2,
                  py: 1,
                  px: 1.5,
                  bgcolor: background.message1,
                  borderRadius: 4,
                  color: primary.contrastText,
                }}
              >
                {mes.content}
              </Typography>
              <Typography variant="caption">{mes.time}</Typography>
            </Box>
          ))}
        </List>
      </Stack>
      <Box sx={{ p: 2, mt: 0, bgcolor: 'background.paper' }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          InputProps={{
            sx: { borderRadius: 15 },
            endAdornment: (
              <InputAdornment position="end">
                <Send />
              </InputAdornment>
            ),
          }}
        />
      </Box>
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
    isMe: false,
  },
  {
    id: 1,
    content: 'The Menu component uses the ',
    time: moment(Date.now()).format('hh:mm'),
    userId: 1,
    isMe: false,
  },
];
