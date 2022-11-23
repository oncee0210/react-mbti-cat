import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) => 
      s.id === type ? {id: s.id, score: s.score + no} : s
    );

    setTotalScore(newScore);

    if(QuestionData.length !== questionNo + 1){
      setQuestionNo(questionNo + 1);
    } else { //마지막 문제라면
      //MBTI 도출
      const mbti = newScore.reduce(
        (acc, curr) => 
          acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
          ""
      );

      //결과 페이지로 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
      });
    }
    /*
    if( type === "EI" ) {
      const addScore = totalScore[0].score + no; // 기존 스코어에 더한 값을 계산 (기존의 값 + 배점)
      const newObject = { id: "EI", score: addScore }; // 새로운 객체
      totalScore.splice(0, 1, newObject); // splice 통해 새로운 객체를 해당 객체 자리에 넣어줌
    } else if( type === "SN" ) {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject);
    } else if( type === "TF" ) {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject);
    } else {
      const addScore = totalScore[3].score + no;
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject);
    }
    */

    setQuestionNo(questionNo + 1);
  }

  return (
    <Wrapper>
      <Contents>
        <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{marginTop: '20px'}} />
        <Title>{QuestionData[questionNo].title}</Title>
        <BUttonGroup className="btn_group">
          <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button>
          <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
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