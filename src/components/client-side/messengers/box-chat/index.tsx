import { Stack } from '@mui/material';

interface BoxChatProps {}

const BoxChat = (props: BoxChatProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: '#FFF',
        height: 'calc(100vh - 70px)',
        width: 1,
        overflow: 'auto',
      }}
    ></Stack>
  );
};

export default BoxChat;
