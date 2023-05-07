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