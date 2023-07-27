import { Stack } from '@mui/material';

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
      }}
    ></Stack>
  );
};

export default SideBarRight;
