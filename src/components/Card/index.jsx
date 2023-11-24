import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/90423131?v=4"/>
         <div>
          <h4>Yuri Bigon</h4>
          <p>Há 22 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React </h4>
          <p>Projeto feito no curso de React pela DIO, com enfâse em Hook Forms... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#ReactJS #Hooks #Javascript</h4>
          <p>
            <FiThumbsUp /> 11
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }