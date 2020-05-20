import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Content } from './styles';
import { useToast } from '../../context/ToastContext';
import { ToastMessage } from './../../context/ToastContext';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => {
        return (
          <Content key={message.id} hasDescription={!!message.description} type={message.type}>
            <FiAlertCircle size={20} />
            <div>
              <strong>{message.title}</strong>
              {message.description && <p>{message.description}</p>}
            </div>
            <button>
              <FiXCircle size={18} />
            </button>
          </Content>
        );
      })}
    </Container>
  );
};

export default Toast;
