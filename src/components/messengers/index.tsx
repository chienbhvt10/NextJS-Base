'use client';
import { Stack } from '@mui/material';
import BoxChat from './box-chat';
import SideBarLeft from './sidebar-left';
import SideBarRight from './sidebar-right';

interface MessengerPageProps {}

const MessengerPage = (props: MessengerPageProps) => {
  return (
    <Stack direction="row" spacing={0}>
      <SideBarLeft />
      <BoxChat />
      <SideBarRight />
    </Stack>
  );
};

export default MessengerPage;
