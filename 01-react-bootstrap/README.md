# react-bootstrap

[React-Bootstrap](https://react-bootstrap.github.io/)

# 1.소개

## 1. React 로 구축된 Bootstrap

- React-Bootstrap은 Bootstrap JavaScript를 대체한다.
- 각 구성 요소는 jQuery와 같은 불필요한 종속성없이 React 구성 요소로 빌드되었다.

## 2. 핵심의 부트 스트랩

- 호환성을 염두에두고 구축된 BootStrap Core를 수용하고, 세계에서 가장 큰 UI 에코 시스템과 호환되도록 노력한다.
- Bootstrap 스타일 시트에 전적으로 의존함으로써 React-Bootstrap은 수천 개의 Bootstrap 테마와 함께 작동한다.

## 3. 기본적으로 액세스 가능

- React 컴포넌트 모델은 각 컴포넌트의 형태와 기능에 대한 많은 제어를 제공한다.
- 각 구성 요소는 접근성을 염두에 두고 구현됐다. 하지만 결과는 일반 Bootstrap과 비슷하게 동작한다.

# 2. 설치

```
yarn add react-bootstrap bootstrap@4.6.0
```

- react-bootstrap에는 기본적으로 d.ts이 깔려져 있어서 @types 설정은 따로 안해도 된다.

## 1. Importing Components

```tsx
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <Button>버튼</Button>;
}

export default App;
```

- css와 사용할 컴포넌트를 나의 파일에 주입해주면 된다.

## 2. Browser Globals

```html
<script
  src="https://unpkg.com/react/umd/react.production.min.js"
  crossorigin
></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin
></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
></script>

<script>
  var Alert = ReactBootstrap.Alert;
</script>
```

- react-bootstrap은 사용자와 인터랙션을 위한 react-bootstrap.js와 react-bootstrap.min.js를 제공한다. 이는 전역객체인 window에 ReactBootstrap 네임으로 할당된다.

## 3. StyleSheet

### 1. CSS

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
```

### 2. Sass

```sass
@import "~bootstrap/scss/bootstrap";
```

```tsx
import "./App.scss";
```

- 위와 같이 사용하면 된다.

## 4. Customize Bootstrap

```sass
$theme-colors: (
    "info": tomato,
    "danger": teal
);
@import "~bootstrap/scss/bootstrap";
```
