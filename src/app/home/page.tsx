'use client';
import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface Props {}

const HomePage: React.FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children } = props;
  return <Box sx={{ mt: 6 }}>{children}</Box>;
};

export default HomePage;
