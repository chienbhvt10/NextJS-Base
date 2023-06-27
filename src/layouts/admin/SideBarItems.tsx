import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ListItemType } from './SideBarMenu';

interface SideBarItemProps {
  open: boolean;
  item: ListItemType;
}

const SideBarItem = (props: SideBarItemProps) => {
  const { open, item } = props;
  const [openSubList, setOpenSubList] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();

  const onChangePath = (item: any) => () => {
    if (!item.subItems) {
      router.push(item.path);
      return;
    }
    setOpenSubList(!openSubList);
  };

  const onChangePathSubitem = (subItem: any) => () => {
    router.push(subItem.path);
  };

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={onChangePath(item)}
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        {open ? (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 1 : 'auto',
              justifyContent: 'center',
              color: '#FFFFFF',
            }}
          >
            {item.icon}
          </ListItemIcon>
        ) : (
          <Tooltip title={item.title} placement="right">
            <IconButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                {item.icon}
              </ListItemIcon>
            </IconButton>
          </Tooltip>
        )}

        <ListItemText
          primary={item.title}
          sx={{ opacity: open ? 1 : 0, color: '#FFFFFF' }}
        />
        {open ? (
          openSubList ? (
            <ExpandLess sx={{ color: theme.palette.common.white }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.common.white }} />
          )
        ) : (
          <></>
        )}
      </ListItemButton>

      <Divider sx={{ borderColor: '#E0E0E0' }} />

      <Collapse in={open && openSubList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subItems?.map((subItem) => (
            <ListItemButton
              key={Math.random()}
              sx={{ py: 0.2, pl: 4 }}
              onClick={onChangePathSubitem(subItem)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                {subItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={subItem.title}
                sx={{
                  opacity: open && openSubList ? 1 : 0,
                  color: '#FFFFFF',
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default SideBarItem;
