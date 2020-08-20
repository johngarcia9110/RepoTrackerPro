import styled from "styled-components";

const LoaderWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-loader-content {
    display: flex;
    flex-direction: column;
    .ant-spin {
      margin-bottom: 32px;
    }
  }
`;

export default LoaderWrapper;
