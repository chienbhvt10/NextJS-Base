import React, { PropsWithChildren } from 'react';

interface Props {}

export const metadata = {
  title: 'Home Page',
  description: 'Home of this app',
};

const HomeLayout: React.FunctionComponent<PropsWithChildren<Props>> = (
  props
) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default HomeLayout;
