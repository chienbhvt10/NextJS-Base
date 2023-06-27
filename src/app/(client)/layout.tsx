import ClientLayoutBounder from '@/layouts/client';
import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Client',
};

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ClientLayoutBounder>{children}</ClientLayoutBounder>;
};
export default ClientLayout;
