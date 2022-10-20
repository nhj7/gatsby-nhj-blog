
<h1> 새로 장만한 개츠비 개발 블로그 </h1>

[https://n-log.netlify.app/](https://n-log.netlify.app/) netlify 사이트에 호스팅 되어있습니다. 

헤로쿠(heroku)와 비슷한 느낌인데 프론트엔드 프로젝트만을 위한 서버리스들만 올라갈 수 있습니다.

블로그 컨텐츠는 [tistory2markdown](https://github.com/nhj7/tistory2markdown) 프로젝트를 생성하여 이전 티스토리에 개발 글들을 일괄적으로 마크다운으로 변환하여 적용했습니다. 일괄 변환에 티스토리 공식 API를 이용했고 oauth2 인증을 위해 셀레니움을 이용했습니다. 

일부 컨텐츠들 ( 테이블 및 일부 이미지)가 깨지는 현상은 html을 마크다운으로 변환하면서 일부 변환이 되지 않는 증상으로 해결책을 찾고 있습니다. 

마크다운 변환 룰을 수정한다던지, 변환 라이브러리를 바꾼다던지요.

향후 운영도 티스토리에 개발 글을 올리면 자동으로 변환하여 이쪽 블로그에도 개발 글이 게시되도록 하는것이 목표입니다.


[gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)


``` 
$ npm start
```

