import React from 'react'
import  { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Column, Container, AlreadyAccountText, LoginText, Row, SubtitleLogin,Title, TitleLogin, Wrapper} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { api } from '../../services/api';

const CreateAccount = () => {

  const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            // TODO: CRIAR ROTA PARA SALVAR NO db.json (JSON server & lowdb)

            // const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            // if(data.length && data[0].id){
            //     navigate('/feed') 
            //     return
            // }

            // alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

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
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name"  control={control} />
            {errors.email && <span>Nome completo é obrigatório</span>}
            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
            {errors.email && <span>E-mail é obrigatório</span>}
            <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
            {errors.senha && <span>Senha é obrigatória</span>}
            <Button title="Criar minha conta" variant="secondary" type="submit"/>
          </form>
          <Row>
            <SubtitleLogin>Ao clicar em "Criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</SubtitleLogin>
          </Row>
          <Row>
            <AlreadyAccountText>
              Já tem conta?
              <LoginText href="/login"> Faça seu login aqui</LoginText>
            </AlreadyAccountText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>
  )
}

export { CreateAccount }