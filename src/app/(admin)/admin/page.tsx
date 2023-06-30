'use client';

import DashboardPage from '@/components/admin-side/dashboard';
import { GetAClassDocument } from '@/services/graphql-gen/graphql';
import { useQuery } from '@apollo/client';

const AdminHomePage = () => {
  const {} = useQuery(GetAClassDocument);
  return <DashboardPage />;
};

export default AdminHomePage;
