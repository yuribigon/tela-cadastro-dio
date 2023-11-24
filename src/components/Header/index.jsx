import React from 'react';
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button';
import { 
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
  Logo
 } from './styles';
import { useNavigate } from 'react-router-dom';

export const Header = ({autenticathed}) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')
  }
  const handleClickCreateAccount = () => {
      navigate('/create-account')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo href="/">
            <img src={logo} alt="logo dio" />
          </Logo>
          {autenticathed ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
        </Row>
        <Row>
        {autenticathed ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/90423131?v=4"/>
              ) : (
              <>
                {/* <MenuRight href="/">Home</MenuRight> */}
                <Button title="Entrar" onClick={handleClickSignIn}/>
                <Button title="Cadastrar" onClick={handleClickCreateAccount}/>
              </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}
