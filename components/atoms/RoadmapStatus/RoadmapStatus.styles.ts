import styled from 'styled-components';

type StatusWrapperType = {
  statusName: 'Planned' | 'In-Progress' | 'Live';
};

export const StatusWrapper = styled.div<StatusWrapperType>`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  span:first-child {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${({ theme, statusName }) => {
      switch (statusName) {
        case 'Planned':
          return theme.colors.orange;
        case 'In-Progress':
          return theme.colors.pink;
        case 'Live':
          return theme.colors.lightBlue;
        default:
          return theme.colors.orange;
      }
    }};
    margin-right: 16px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
  }
  span:last-child {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
    margin-left: auto;
  }
`;
