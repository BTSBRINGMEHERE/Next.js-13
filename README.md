# NextJS appDir 구조로 해보기

## 사용한 기술
> NextJS, TypeScript, TailwindCSS, React

## 프레임워크
NextJS
```
npx create-next-app@latest --ts
```

## 사용이유
- 유튜브에 있는 다양한 방법의 NextJS 13을 공부해보던 중 시간이 짧게 소모되고 튜토리얼 + 각 기능에 대해 공부할 수 있었습니다.
- 기존의 pages, components 디렉토리로 나눠서 만드는 구조가 아닌 appDir을 이용한 구조로 개발을 할 수 있었습니다.

## appDir
- 우선 새로운 구조로 NextJS를 공부 할 수 있어서 좋았습니다.

|기본구조|appDir|
|----|------|
|<img width="181" alt="스크린샷" src="https://user-images.githubusercontent.com/97148877/230008431-a639bdfb-5c1a-41c1-afab-c0feb5a0409a.png" />|<img width="181" alt="스크린샷" src="https://user-images.githubusercontent.com/97148877/230008493-323a4348-4591-462e-b979-3ac2e9bef309.png" />|

- 기본구조
  - pages 디렉토리에서 라우터 구성이 가능합니다. 디렉토리 안에서 index, app, document를 제외한 파일, 디렉토리를 라우터로 구성합니다.
  - -> ex) localhost:3000(index), localhost:3000/search(search), localhost:3000/categories/category(categories 디렉토리 안에 category파일)
  - index 파일이 첫 메인화면으로 구성이 되고 app 파일에서 컴포넌츠 구성이 가능합니다. app에서 헤더 푸터를 넣을 수 있습니다.
  - components는 리액트와 동일하게 사용합니다.
  - 각종 에러를 404, 500 파일을 만들어서 관리할 수 있습니다.
- appDir
  - 기본적으로 존재하던 index, document 파일은 필요가 없습니다. 대신, next.config.js에서 새로운 설정을 추가합니다. experimental: {appDir : true}
  - 모든것을 app 디렉토리에서 구성을 합니다. 첫 app 디렉토리에 있는 page가 메인화면이고 layout으로 컴포넌츠 골격을 맞출 수 있습니다.
  - 모든 라우터들은 새롭게 디렉토리를 만들고 해당 디렉토리에서 page파일을 추가해야만 합니다. layout은 별개로 해당 페이지의 컴포넌츠 골격을 맞출 때 사용합니다.
  - 새로운 components는 해당 페이지의 디렉토리에서 만들어서 사용하면 됩니다.
  - 괄호안 디렉토리는 라우터를 더 손쉽게 관리하기 위해서 사용합니다. 괄호안 디렉토리에 넣더라도 해당 라우터에는 지장이 없습니다.
  - (users)안에 넣너라도 

## 느낀점
- SSR, SSG에 대해 학습을 했고 각각에 사용되는 함수를 직접 실습을 해봤습니다. SSR과 CSR의 차이점은 서버에서 미리 렌더링된 DOM구조를 HTML문서를 렌더링하여 웹 크롤링, SEO에 좋습니다.
- 구조적으로 만들기 좋았습니다. 컴포넌츠를 구성할 때 큰 고민없이 규격대로 설계해서 좋습니다.
