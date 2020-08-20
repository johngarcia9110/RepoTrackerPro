import styled from "styled-components";
import { colors } from "../../GlobalStyles";

const RepoSearchWrapper = styled.div`
  .search-box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 32px;

    .ant-alert {
      margin-bottom: 16px;
    }

    .search-input {
      display: flex;
    }

    .results {
      padding-top: 16px;

      h3 {
        text-align: center;
      }

      .controls {
        display: flex;
        justify-content: flex-end;
      }

      .inner {
        max-height: 300px;
        border: 2px solid ${colors.lightestGray};
        overflow: hidden;
        overflow-y: scroll;
        background: ${colors.lightestGray};
        padding: 8px;
        margin-bottom: 16px;
      }

      .result {
        padding: 16px;
        background: ${colors.white};
        border-bottom: 1px solid ${colors.lightestGray};
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .repo-avatar {
            max-width: 50px;
            margin-right: 16px;
          }
          .title {
            font-size: 1.6rem;
            margin-bottom: 0;
            span {
              display: block;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

export default RepoSearchWrapper;
