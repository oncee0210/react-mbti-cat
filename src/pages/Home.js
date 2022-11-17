import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/ggompang.jpeg';
import { Button } from 'react-bootstrap';

//css-in-js

const Home = () => {
  return (
    <Wrapper>
      <Header>Cats</Header>
      <Contents>
        <Title>What kind of cat is right for me?</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle" width={350} height={350} />
        </LogoImage>
        <Desc>
          나의 MBTI 성향과 잘맞는 고양이 찾기
        </Desc>
        <Button>시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`

const Header = styled.div`
  font-size: 48px;
  display: flex;
  justify-content: center;
`

const Contents = styled.div`
  text-align: center;
`

const Title = styled.div`
  margin-top: 10px;
  font-size: 30px;
`

const LogoImage = styled.div`
  margin-top: 40px;
`

const Desc = styled.div`
  margin-top: 40px;
  font-size: 20px;
`