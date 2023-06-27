'use client';
import AdminLayoutBounder from '@/layouts/admin';
import { FC, PropsWithChildren } from 'react';

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AdminLayoutBounder>{children}</AdminLayoutBounder>;
};
export default AdminLayout;
