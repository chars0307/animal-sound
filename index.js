const express = require('express');     // 익스프레스 패키지 불러오기
const cors = require('cors');           // CORS(다른 출처의 요청 허용 패키지) 패키지 불러오기
const app = express();                  // 서버 역할을 할 앱 생성하기
const port = 3000;                      // 서버가 요청받을 포트:3001


app.use(cors());    // CORS 설정 적용하기

app.get('/', (req, res) => {
    res.send('AiDeveloperChoi\nHello, World!');
});

app.get('/sound/:name', (req, res) => { //변수명 형태로 경로 설정
    const {name} = req.params;          // 변수 name을 중괄호로 감싸기
    
    if (name == "dog") {                // 변수에 따른 응답값을 조건문으로 작성
        res.json({'sound':'멍멍'});
    } else if (name == "cat"){
        res.json({'sound':'야옹'});
    } else if (name == "pig") {
        res.json({'sound':'꿀꿀'});
    } else {
        res.json({'sound':'알 수 없음'});
    ;}
});



app.listen(port, () =>{ // 설정한 포트 번호로 요청받기
    console.log(`Example app listening on port ${port}`);
});         // 콘솔에 메시지를 띄워 서버의 실행 상태 표시