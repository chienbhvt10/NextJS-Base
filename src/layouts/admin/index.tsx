'use client';
import { Fragment, PropsWithChildren, useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import ContentBounder from './ContentBounder';

interface AdminLayoutProps {}

const AdminLayoutBounder: React.FunctionComponent<
  PropsWithChildren<AdminLayoutProps>
> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />
      <ContentBounder open={open}>{children}</ContentBounder>
    </Fragment>
  );
};

export default AdminLayoutBounder;
