import { FC, Fragment, PropsWithChildren } from 'react';

interface ClientLayoutProps {}

const ClientLayoutBounder: FC<PropsWithChildren<ClientLayoutProps>> = (
  props
) => {
  const { children } = props;
  return <Fragment>Làm layout client đê{children}</Fragment>;
};

export default ClientLayoutBounder;
