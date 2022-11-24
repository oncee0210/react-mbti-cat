import React from "react";
import { Button } from 'react-bootstrap';
const { Kakao } = window;

const KakaoShareButton = ({data}) => {
  const url = "https://mbti-cat.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(()=>{
    Kakao.cleanup();
    Kakao.init('457cd836f617a5df6c67ef2954f3e7af');
  },[]);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MBTI로 보는 고양이 결과',
        description: `나의 MBTI 성향과 잘맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '테스트 바로가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return(
    <Button oncClick={shareKakao} className="btn1 kakao" style={{marginLeft: '10px'}} >카카오톡 공유하기</Button>
  )
}

export default KakaoShareButton;