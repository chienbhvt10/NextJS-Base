import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
  };

  const onShowMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onHideMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack
          direction="row"
          sx={{
            px: 2,
            py: 0.5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton onClick={onClickLogo}>
            <Image src="/images/logoo.jpg" alt="logo" width={50} height={50} />
          </IconButton>
          <Tooltip title="Account settings">
            <IconButton onClick={onShowMenu} size="small" sx={{ ml: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Stack>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={onHideMenu}
        onClick={onHideMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={onHideMenu}>
          <Avatar sx={{ width: 25, height: 25 }} />
          <Typography variant="body1" sx={{ ml: 1 }}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={onHideMenu}>
          <Avatar sx={{ width: 25, height: 25 }} />
          <Typography variant="body1" sx={{ ml: 1 }}>
            My account
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onHideMenu}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={onHideMenu}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={onHideMenu}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
