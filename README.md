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
  - 기본적으로 존재하던 index, document 파일은 필요가 없습니다. 대신, next.config.js에서 새로운 설정을 추가합니다. experimental: {appDir: true}
  - 모든것을 app 디렉토리에서 구성을 합니다. 첫 app 디렉토리에 있는 page가 메인화면이고 layout으로 컴포넌츠 골격을 맞출 수 있습니다.
  - 모든 라우터들은 새롭게 디렉토리를 만들고 해당 디렉토리에서 page파일을 추가해야만 합니다. layout은 별개로 해당 페이지의 컴포넌츠 골격을 맞출 때 사용합니다.
  - 새로운 components는 해당 페이지의 디렉토리에서 만들어서 사용하면 됩니다.
  - 괄호안 디렉토리는 라우터를 더 손쉽게 관리하기 위해서 사용합니다. 괄호안 디렉토리에 넣더라도 해당 라우터에는 지장이 없습니다.
  - (users)안에 넣너라도 localhost:3000/todos/로 사용이 가능합니다.

## 차이점
1. 라우터 구성
  - 당연하게도 라우터 구성하는 법이 다릅니다. 기본구조는 pages에 abc.tsx 파일을 생성하는 것 appDir은 app에 새로운 디렉토리를 만들고 해당 디렉토리에 page.tsx 파일을 생성하는 것
  - appDir은 () 괄호로 구성된 디렉토리를 만들어서 더 손쉽게 라우터를 관리할 수 있습니다.
2. 에러관리
  - 기본구조는 404, 500 등 해당 에러를 페이지를 만들어서 관리하지만 app구조는 not-found라는 컴포넌트를 만들어서 관리합니다. 이름만 다를 뿐 컴포넌트를 만들어서 관리한다는 점은 같다고 볼수있습니다.

## 공통점
1. 동적 파일은 대괄호로 해당 페이지 혹은 컴포넌트를 만들어서 관리합니다.
2. 클라이언트와 서버에서 사용하는 구조가 같습니다. 파일 최상단에 "use client"를 추가해서 관리를하면 더욱 편합니다.

## 느낀점
- 여러 구조를 학습하면서 느낀 점은 자기에게 맞는 걸 사용하는게 좋습니다....
