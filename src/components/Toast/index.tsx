import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Content } from './styles';

const Toast = () => {
  return (
    <Container>
      <Content hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Atenção</strong>
          <p>Aqui conterá algum feedback</p>
        </div>
        <button>
          <FiXCircle size={18} />
        </button>
      </Content>
      <Content hasDescription={false} type="error">
        <FiAlertCircle size={20} />
        <div>
          <strong>Atenção</strong>
          {/* <p>Aqui conterá algum feedback</p> */}
        </div>
        <button>
          <FiXCircle size={18} />
        </button>
      </Content>
      <Content hasDescription type="success">
        <FiAlertCircle size={20} />
        <div>
          <strong>Atenção</strong>
          <p>Aqui conterá algum feedback</p>
        </div>
        <button>
          <FiXCircle size={18} />
        </button>
      </Content>
    </Container>
  );
};

export default Toast;
