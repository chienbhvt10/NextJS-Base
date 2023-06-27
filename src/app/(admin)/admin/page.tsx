'use client';

import DashboardPage from '@/components/admin-side/dashboard';
import { FC, PropsWithChildren } from 'react';

interface AdminHomePageProps {}

const AdminHomePage: FC<PropsWithChildren<AdminHomePageProps>> = (props) => {
  return <DashboardPage />;
};

export default AdminHomePage;
