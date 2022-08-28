import React from "react";
import styled from "styled-components";

/**
 * 2. styled-components 사용하기
 * 컴포넌트 별로 css적용하기
 * import styled from "styled-components";
 * const 컴포넌트명 = styled.태그명`
 * css 내용
 * `
 */

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
