import styled from 'styled-components';

export const RoadmapWrapper = styled.div`
  width: 230px;
  height: 180px;
  padding: 24px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  border-radius: 10px;
  h3 {
    flex-basis: 45%;
    height: 26px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
  }
  a {
    flex-basis: 45%;
    height: 26px;
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (min-width: 768px) {
    height: 100%;
    margin-top: 0;
  }
`;
