'use client';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const router = useRouter();

  const onClickIconMessenger = () => {
    router.push('/messengers');
  };

  return (
    <Box>
      <IconButton
        onClick={onClickIconMessenger}
        sx={{ position: 'fixed', bottom: 30, right: 30 }}
      >
        <Image src="/images/mes.png" alt="" width={50} height={50} />
      </IconButton>
    </Box>
  );
};

export default HomePage;
