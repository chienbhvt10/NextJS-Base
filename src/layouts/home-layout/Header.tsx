import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props extends AppBarProps {
  handleDrawerOpen?: () => void;
}

const Header = (props: Props) => {
  const { handleDrawerOpen, open } = props;
  const pathname = usePathname();

  const onLogout = () => {};

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          px: pathname === '' ? 5 : 2.25,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        disableGutters={true}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {pathname !== '' && (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
