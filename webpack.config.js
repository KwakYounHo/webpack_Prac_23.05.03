// config파일의 위치는 항상 최상위경로
// ESM 방식으로 모듈을 만들어 볼 계획

export default {
  entry  : "./index.js",
  output : {
    filename : "./index.testBundle.js"
  }
}