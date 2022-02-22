# React + Typescript
리액트와 타입스크립트 기본 세팅
`webpack`과 `typescript`를 연결하는 설정부분에 대해서는 공부 필요

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
### 2.1 코드 정리 도구 설정 파일
`.eslintrc`, `.prettierrc` 생성

### 2.2 타입스크립트 설정 파일
`tsconfig.json` 생성

### 2.3 웹팩 설정 파일
`webpack.config.ts` 생성

### 2.4 타입스크립트 + 웹팩 설정 파일
`tsconfig-for-webpack-config.json` 생성

### 2.5 SVG파일 사용을 위한 파일
`custom.d.ts` 생성

### 2.6 테마 설정 파일
`theme.ts`, `styled.d.ts` 생성

## 3. 기본 제공
1. 레이아웃
2. 라우팅 ( `react-router-dom v6` )
3. 테마 ( `styled-components` )
4. 기본 아이콘 ( `.svg` )
5. 기본 컴포넌트 ( `Button`, `Spinner`, `Icon` )
6. 사용자 정의 훅 ( `useInput` )
7. 페비콘