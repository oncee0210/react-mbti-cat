import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata'

const Question = () => {
  return (
    <Wrapper>
      <Contents>
        <ProgressBar striped variant="danger" now={80} style={{marginTop: '20px'}} />
        <Title>{QuestionData[0].title}</Title>
        <BUttonGroup className="btn_group">
          <Button>{QuestionData[0].answera}</Button>
          <Button>{QuestionData[0].answerb}</Button>
        </BUttonGroup>
      </Contents>
    </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  font-family: "SimKtungha";
`

const Contents = styled.div`
  text-align: center;
`

const Title = styled.div`
  margin-top: 10px;
  font-size: 30px;
`

const BUttonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`