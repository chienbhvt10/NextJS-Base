import { Avatar, Stack, Typography } from '@mui/material';

interface SideBarRightProps {}

const SideBarRight = (props: SideBarRightProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: '#FFF',
        height: 'calc(100vh - 70px)',
        minWidth: 350,
        overflow: 'auto',
        borderLeft: '1px solid #ccc',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="column"
        spacing={0}
        sx={{ alignItems: 'center', mt: 2 }}
      >
        <Avatar src="/images/hoangvi.jpg" sx={{ height: 80, width: 80 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Hoang vi
        </Typography>
        <Typography variant="body2">Active</Typography>
      </Stack>
    </Stack>
  );
};

export default SideBarRight;
