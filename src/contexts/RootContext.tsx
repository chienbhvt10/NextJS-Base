'use client';
import { Dispatch, PropsWithChildren, createContext, useState } from 'react';

export interface RootContextValues {
  exampleState: any;
  setExampleState: Dispatch<any>;
}

const RootContext = createContext<RootContextValues | null>(null);

const RootProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [exampleState, setExampleState] = useState<any>();
  return (
    <RootContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </RootContext.Provider>
  );
};

const RootConsumer = RootContext.Consumer;
export { RootConsumer, RootProvider, RootContext as default };
