'use client';
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { io } from 'socket.io-client';

export interface RootContextValues {
  exampleState: any;
  setExampleState: Dispatch<any>;
}

const RootContext = createContext<RootContextValues | null>(null);

const RootProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [exampleState, setExampleState] = useState<any>();
  const [mes, setMes] = useState('');
  const [room, setRoom] = useState('');
  const [receiveMes, setReceiveMes] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('fail');

  const socket = io('http://localhost:8000');

  useEffect(() => {
    socket.on('receive-mes', (data: string) => {
      setReceiveMes((prev) => [...prev, data]);
    });

    socket.on('receive-status', (data) => {
      console.log(data);
      setStatus(data);
    });
  }, [socket]);

  const onClickSendMessage = () => {
    socket.emit('send-chat', { mes, room, name });
    setMes('');
  };

  const onClickJoinChat = () => {
    if (room !== '') {
      socket.emit('join-room', room);
    }
  };

  return (
    <RootContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </RootContext.Provider>
  );
};

const RootConsumer = RootContext.Consumer;
export { RootConsumer, RootProvider, RootContext as default };
