import React from 'react';
//css-in-js
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

const Result = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>Cats</Header>
      <Contents>
        <Title>View Results</Title>
        <LogoImage>
          <img src={ResultData[0].image} className="rounded-circle" width={350} height={350} alt="cat" />
        </LogoImage>
        <Desc>
          당신의 성향과 잘맞는 고양이는 "{ResultData[0].name}"
        </Desc>
        <Button className="btn1" onClick={()=>navigate('/')}>다시하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Result;

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