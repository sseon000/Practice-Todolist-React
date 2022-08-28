## REACT Todo-List 만들기

---

<br>

> ### 강의 영상 참고 React 활용 Todo-List 만들기

<br><br>

### Library

- styled-components, react-icons

> npm install styled-components react-icons

<br>

### 1.전역 css style

1. import 하기
2. createGlobalStyle 안에 css

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

<br>

### 2. styled-components 사용하기

- 컴포넌트 별로 css적용하기

1. import 하기
2. const 컴포넌트명 = styled.태그명 \`css 내용\`;

```js
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
```
