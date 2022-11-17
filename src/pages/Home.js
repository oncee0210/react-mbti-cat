import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/ggompang.jpeg';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//css-in-js

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    //이전에는 useHistory, 요즘은 react router 버전 업데이트로 useNavigate 사용
    navigate('/question');
  }

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
        <Button className="btn1" onClick={handleClickButton}>시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  font-family: "SimKtungha";
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-family: "SimKtungha";
  font-size: 48px;
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