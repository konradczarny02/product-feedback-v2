import styled from 'styled-components';

export const RoadmapHeaderWrapper = styled.header`
  width: 100%;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  div:first-child {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};

    p {
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.colors.white};
      }
    }

    path {
      stroke: ${({ theme }) => theme.colors.white};
    }

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 3px;
    }
  }

  @media (min-width: 768px) {
    border-radius: 8px;
    width: 90%;
    margin: 32px auto;
    max-width: 1000px;
  }
`;
