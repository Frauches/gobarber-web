import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './styles';
import { Form } from '@unform/web';


const SignUp: React.FC = () => {


  function handleSubmit(data: object):void {
    console.log(data);
  }


  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="E-mail"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="createAccount">
          <FiArrowLeft />
        Voltar para logon
      </a>
      </Content>
    </Container>
  )
};

export default SignUp;
