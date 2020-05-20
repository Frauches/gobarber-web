import React from 'react';
import { Container } from './styles';
import Toast from './Toast';
import { ToastMessage } from './../../context/ToastContext';
import { useTransition } from 'react-spring';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props}) => {
        return <Toast key={key} message={item} style={props}/>;
      })}
    </Container>
  );
};

export default ToastContainer;
