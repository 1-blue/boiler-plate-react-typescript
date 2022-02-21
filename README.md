# React + Typescript
리액트와 타입스크립트 기본 세팅
`webpack`과 `typescript`를 연결하는 설정부분에 대해서는 공부 필요

> 기본 레이아웃, 라우팅, 유틸함수, 아이콘, 폴더구조 및 세팅파일 제공

+ `README`는 조금 더 `typescript`에 대해서 이해하고 난 후에 수정할 예정

## 1. react, webpack, typescript관련 라이브러리 설치
```bash
npm i typescript
npm i react react-dom
npm i @types/react @types/react-dom

# 코드 정리 도구
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier

# webpack
npm i -D webpack webpack-cli webpack-dev-server
npm i -D @pmmmwh/react-refresh-webpack-plugin
npm i -D fork-ts-checker-webpack-plugin
npm i -D html-webpack-plugin

# loader + babel
npm i -D style-loader css-loader @svgr/webpack
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

# typescript + webpack
npm i -D @types/webpack @types/node @babel/preset-typescript ts-node

npm i cross-env

# 라우팅
npm i react-router-dom @types/react-router-dom

# styled-components
npm i styled-components @types/styled-components
```

## 2. 생성한 설정 파일
1. `.eslintrc`, `.prettierrc` 생성
2. `tsconfig.json` 생성
3. `webpack.config.ts` 생성
4. `tsconfig-for-webpack-config.json` 생성
5. `custom.d.ts` 생성