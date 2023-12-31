import React from 'react'
import  { MdEmail, MdLock } from 'react-icons/md'
import { Column, Container, CreateText, ForgetText, Row, SubtitleLogin,Title, TitleLogin, Wrapper} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api';
import { IFormData } from './types'

const Login = () => {

  const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData:IFormData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
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
          <TitleLogin>Faça seu login</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
            {errors.email && <span>E-mail é obrigatório</span>}
            <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
            {errors.senha && <span>Senha é obrigatório</span>}
            <Button title="Entrar" variant="secondary" type="submit"/>
          </form>
          <Row>
            <ForgetText>Esqueci minha senha</ForgetText>
            <CreateText href="/create-account">Criar conta</CreateText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>
  )
}

export { Login }