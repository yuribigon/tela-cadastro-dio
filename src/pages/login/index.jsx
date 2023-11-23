import React from 'react'
import  { MdEmail, MdLock } from 'react-icons/md'
import { Column, Container, CreateText, ForgetText, Row, SubtitleLogin,Title, TitleLogin, Wrapper} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

const Login = () => {
  return ( <>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
          <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
            <Button title='Entrar' variant='secondary' onClick={()=>{}} />
          </form>
          <Row>
            <ForgetText>Esqueci minha senha</ForgetText>
            <CreateText>Criar conta</CreateText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>
  )
}

export { Login }