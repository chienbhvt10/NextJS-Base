'use client';
import { socketURL } from '@/utils/config';
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
  onClickSendMessage: () => void;
  onClickJoinChat: () => void;
  onTyping: () => void;
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

  const socket = useMemo(() => io(socketURL), []);

  useEffect(() => {
    socket.on('receive-mes', (data: string) => {
      setReceiveMes((prev) => [...prev, data]);
    });

    socket.on('receive-status', (data) => {
      console.log(data);
      setStatus(data);
    });

    socket.on('typing', ({ name, isTyping }) => {
      if (isTyping) {
      }
    });

    socket.on('connect-socket', ({ message }) => {
      console.log(message);
    });

    socket.on('disconnect-socket', ({ message }) => {
      console.log(message);
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

  const onTyping = () => {
    socket.emit('typing', { isTyping: true });
  };

  return (
    <RootContext.Provider
      value={{
        exampleState,
        setExampleState,
        onClickJoinChat,
        onClickSendMessage,
        onTyping,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

const RootConsumer = RootContext.Consumer;
export { RootConsumer, RootProvider, RootContext as default };
