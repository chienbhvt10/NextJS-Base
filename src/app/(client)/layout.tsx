import ClientLayoutBounder from '@/layouts/client';
import { FC, PropsWithChildren } from 'react';

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ClientLayoutBounder>{children}</ClientLayoutBounder>;
};
export default ClientLayout;
