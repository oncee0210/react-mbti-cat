import React, { useState } from 'react';
//css-in-js
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import KakaoShareButton from '../component/KakaoShareButton';

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = useState({});

  React.useEffect(()=>{
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>Cats</Header>
      <Contents>
        <Title>View Results</Title>
        <LogoImage>
          <img src={resultData.image} className="rounded-circle" width={350} height={350} alt="cat" />
        </LogoImage>
        <Desc>
          <Mbti>{mbti}</Mbti>
          당신과 잘맞는 고양이는 "{resultData.name}"
        </Desc>
        <ButtonGroup>
          <Button className="btn1" onClick={()=>navigate('/')}>다시하기</Button>
          <KakaoShareButton />
        </ButtonGroup>
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

const Mbti = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 600;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`