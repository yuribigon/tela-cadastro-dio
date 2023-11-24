import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticathed={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Yuri Bigon" image="https://avatars.githubusercontent.com/u/90423131?v=4" percentual={20}/>
                <UserInfo nome="Yuri Bigon" image="https://avatars.githubusercontent.com/u/90423131?v=4" percentual={40}/>
                <UserInfo nome="Yuri Bigon" image="https://avatars.githubusercontent.com/u/90423131?v=4" percentual={60}/>
                <UserInfo nome="Yuri Bigon" image="https://avatars.githubusercontent.com/u/90423131?v=4" percentual={80}/>
                <UserInfo nome="Yuri Bigon" image="https://avatars.githubusercontent.com/u/90423131?v=4" percentual={100}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 