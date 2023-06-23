import List from '@mui/material/List';
import Image from 'next/image';
import SideBarItem from './SideBarItems';

interface Props {
  open: boolean;
}

export interface ListItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
  subItems?: {
    title: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

const listItems: ListItemType[] = [
  {
    title: 'Test',
    path: '#',
    icon: (
      <Image
        src="/images/home.png"
        alt=""
        width={25}
        height={25}
        priority={true}
      />
    ),
    subItems: [
      {
        title: 'Test',
        path: '/home',
        icon: (
          <Image src="/images/home.png" alt="" width={18} priority={true} />
        ),
      },
      {
        title: 'Test',
        path: '#',
        icon: (
          <Image src="/images/home.png" alt="" width={18} priority={true} />
        ),
      },
    ],
  },
  {
    title: 'Test',
    path: '#',
    icon: (
      <Image
        src="/images/home.png"
        alt=""
        width={25}
        height={25}
        priority={true}
      />
    ),
    subItems: [
      {
        title: 'Test',
        path: '#',
        icon: (
          <Image src="/images/home.png" alt="" width={18} priority={true} />
        ),
      },
      {
        title: 'Test',
        path: '#',
        icon: (
          <Image src="/images/home.png" alt="" width={18} priority={true} />
        ),
      },
    ],
  },
];

const SideBarMenu = (props: Props) => {
  const { open } = props;

  return (
    <List>
      {listItems.map((item, index) => (
        <SideBarItem key={Math.random()} item={item} open={open} />
      ))}
    </List>
  );
};

export default SideBarMenu;
