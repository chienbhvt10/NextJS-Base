import { useGetAClassQuery } from '@/services/graphql/classes-module/apis';

interface DashboardPageProps {}

const DashboardPage = (props: DashboardPageProps) => {
  const { data, refetch } = useGetAClassQuery();

  return <>Dashboard</>;
};

export default DashboardPage;
