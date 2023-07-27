'use client';
import { FC, Fragment, PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ClientLayoutProps {}

const ClientLayoutBounder: FC<PropsWithChildren<ClientLayoutProps>> = (
  props
) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default ClientLayoutBounder;
