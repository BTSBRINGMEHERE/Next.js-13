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

## 느낀점
- SSR, SSG에 대해 학습을 했고 각각에 사용되는 함수를 직접 실습을 해봤습니다. SSR과 CSR의 차이점은 서버에서 미리 렌더링된 DOM구조를 HTML문서를 렌더링하여 웹 크롤링, SEO에 좋습니다.
- 구조적으로 만들기 좋았습니다. 컴포넌츠를 구성할 때 큰 고민없이 규격대로 설계해서 좋습니다.
