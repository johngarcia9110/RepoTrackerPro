import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#ffffff",
  brightGreen: "#4CC867",
  lightestGray: "#e2e1e1",
  navBackground: "#ffffff",
  mainBackground: "#efefef",
  footerBackground: "#d0d0d0",
  cardBackground: "#ffffff",
  primaryHeading: "#464444",
  primaryText: "#5f5e5e",
  secondaryText: "#FFFFFF",
  btnPrimary: "#408fb1",
  btnPrimaryHover: "#2b6077",
  cardShadow: "rgb(0 0 0 / 0.4)",
};

const GlobalStyles = createGlobalStyle`
  html, body {
    min-height: 100%;
    color: ${colors.primaryText};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    
    h1, h2, h3, h4, h5 {
      color: ${colors.primaryHeading};
    }
    
    p {
       color: ${colors.primaryText};
    }
  }
  
  .container {
    max-width: 920px;
    margin: auto;
  }
  
  .card {
    box-shadow: 0 8px 24px -20px ${colors.cardShadow};
    background: white;
    border-radius: 4px;
    
    &.info-card {
      padding: 32px;
      text-align: center;
      margin-bottom: 32px;
      p {
        margin: 0;
      }
    }
  }
  
  .ant-btn-primary {
    background: ${colors.btnPrimary};
    border-color: ${colors.btnPrimary};
    
    &:hover, &:focus, &:active {
      background: ${colors.btnPrimaryHover};
      border-color: ${colors.btnPrimaryHover};
    }
  }
  
  #root {
    min-height: 100vh;
    
    .ant-layout {
      min-height: 100vh;
    }
  }
`;

export default GlobalStyles;
