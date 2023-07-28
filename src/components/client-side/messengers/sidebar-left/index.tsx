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
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VideocamIcon from '@mui/icons-material/Videocam';

interface SideBarLeftProps {}

const SideBarLeft = (props: SideBarLeftProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: '#FFF',
        height: 'calc(100vh - 70px)',
        minWidth: 320,
        overflow: 'auto',
        position: 'relative',
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
        <Box sx={{ px: 2 }}>
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
      <List sx={{ minWidth: 300, zIndex: 5, m: 0, p: 0 }}>
        {friends.map((friend) => (
          <ListItem disablePadding key={friend.id}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="avatar"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                />
              </ListItemIcon>
              <Stack direction="column">
                <Typography variant="body1">{friend.name}</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  You: {friend.lastMessage}
                  <Typography variant="caption" component="span">
                    {' '}
                    - 1 hrs ago
                  </Typography>
                </Typography>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SideBarLeft;

const friends = [
  { id: '1', image: '', name: 'Chien', lastMessage: 'heloooo1' },
  { id: '2', image: '', name: 'Viiiiii', lastMessage: 'heloooo2' },
  { id: '3', image: '', name: 'Chien', lastMessage: 'heloooo3' },
  { id: '4', image: '', name: 'Viiiiii', lastMessage: 'heloooo4' },
  { id: '5', image: '', name: 'Chien', lastMessage: 'heloooo5' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
  { id: '6', image: '', name: 'Viiiiii', lastMessage: 'heloooo6' },
];
