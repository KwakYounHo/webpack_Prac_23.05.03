1. 프로젝트 생성
2. npm init
3. npm i --save-dev webpack
4. npm i --save-dev webpack-cli
5. webpack.conifg.js
  - 웹팩 정의 파일은 특이하게 js파일을 요구한다.
  - 보통은 JSON, yaml, bat파일을 요구한다고 한다.
6. webpack 파일에서 정의를 ESM방식으로 모듈로 만들어 보았다
7. entry파일인 index.js파일을 수정하였다.
8. webpack.config.js파일에서 정의를 수정하였다.
  - 엔트리 파일 : index.js
  - 아웃풋 파일 : index.testBundle.js
9. cli에 npx webpack build 입력(webpack 실행하기)
  a. cli에서 webpack을 실행하는 커맨드
  b. npx는 npm + execute(실행)의 합성어입니다.
    - 의존하고 있는 모듈(패키지)를 실행할 때 사용됩니다.
    - '개발용' 패키지이므로 npx 명령어를 사용
  c. configuration에서 warning등장
    - warning 내용 : 구성 파일에서 '모드'가 정의되지 않았습니다.  
    웹팩은 '베포용'으로 기본 설정을 대체하였습니다.  
    '모드'옵션에서 '개발환경', '베포'를 각 환경에 대한 기본값을 설정하십시오.  
    또한 'none'을 설정하면 기본 동작을 사용하지 않도록 설정할 수 있습니다.
  d. index.testBundle.js파일이 생성되었다.