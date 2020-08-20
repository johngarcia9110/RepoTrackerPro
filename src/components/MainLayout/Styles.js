import styled from "styled-components";
import { Layout } from "antd";
import { colors } from "../../GlobalStyles";

const StyledMainLayout = styled(Layout)`
  .ant-layout-header {
    background: ${colors.navBackground};
    height: unset;
  }
  .ant-layout-content {
    background: ${colors.mainBackground};
    padding: 16px 50px;
  }
  .ant-layout-footer {
    background: ${colors.footerBackground};
    padding: 16px;
    p {
      margin: 0;
      text-align: center;
    }
  }
`;

export default StyledMainLayout;
