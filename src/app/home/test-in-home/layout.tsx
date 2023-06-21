import { PropsWithChildren } from 'react';

interface Props {}

const TestLayout: React.FunctionComponent<PropsWithChildren<Props>> = (
  props
) => {
  const { children } = props;
  return <>{children}</>;
};

export default TestLayout;
