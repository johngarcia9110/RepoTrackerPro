import styled from "styled-components";
import { colors } from "../../GlobalStyles";

const StyledRepoCard = styled.div`
  background: ${colors.cardBackground};
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 40px;
  position: relative;

  .tag {
    background: ${colors.brightGreen};
    color: ${colors.white};
    border-radius: 50px;
    padding: 4px 32px;
    position: absolute;
    font-size: 1.2rem;
    top: -18px;
    right: 16px;
    text-transform: uppercase;
    text-shadow: 2px 0px 6px #2c8a41;
  }

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${colors.lightestGray};
    padding-bottom: 16px;
    margin-bottom: 16px;

    img {
      max-width: 50px;
      margin-right: 16px;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }

  .date-group {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.lightestGray};
    margin-bottom: 16px;
    padding-bottom: 16px;

    .date {
      font-size: 1.4rem;
      width: 100%;
      text-align: center;
      margin-bottom: 0;

      span {
        display: block;
        font-size: 1rem;
      }
    }
    .separator {
      width: 2px;
      min-height: 100%;
      background: ${colors.lightestGray};
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .ant-btn:first-child {
      margin-right: 16px;
    }

    .ant-btn-primary {
      min-width: 200px;
    }
  }
`;

export default StyledRepoCard;
