import { PropsWithChildren, useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import ContentBounder from './ContentBounder';

interface HomeLayoutProps {}

const HomeLayout: React.FunctionComponent<
  PropsWithChildren<HomeLayoutProps>
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
    <>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />
      <ContentBounder open={open}>{children}</ContentBounder>
    </>
  );
};

export default HomeLayout;
