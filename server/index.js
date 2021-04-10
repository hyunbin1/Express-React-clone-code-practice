//  server 시작점
// 클론 코딩 영상: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu
// npm install body-parser cors express mongoose nodemon
// body-parser: 요청에 대한 응답 - post, put 요청 메소드의 request.body를 읽어오기 위해 사용
// https://velog.io/@yejinh/express-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4-bodyParser-%EB%AA%A8%EB%93%88
// cors: 교차 출처 리소스 공유 - https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
// nodemon: 서버 코드 변경시마다 자동으로 재시작 해줌.
// ===================================================================================================

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// 앱 초기화 - 앱 인스턴스에서 다양한 방법을 사용할 수 있게 해준다. https://cloud.google.com/appengine/docs/standard/java/how-instances-are-managed?hl=ko
const app = express();

// 21/4/7 일반적인 세팅 
app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: true }));
app.use(cors());






// 21/4/11 mongodb 데이터











