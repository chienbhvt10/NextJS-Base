import AdminLayoutBounder from '@/layouts/admin';
import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Admin',
};

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AdminLayoutBounder>{children}</AdminLayoutBounder>;
};
export default AdminLayout;
