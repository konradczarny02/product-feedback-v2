import styled from 'styled-components';

export const StyledComment = styled.li<{ isReply: boolean }>`
  width: 100%;
  border-bottom: ${({ theme, isReply }) => (isReply ? 'none' : `2px solid ${theme.colors.lightGray}`)};
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 24px;

  @media (min-width: 1440px) {
    padding-bottom: 32px;
  }
`;

export const AuthorInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  margin: 24px 0 16px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    @media (min-width: 768px) {
      margin-left: 32px;
    }

    h3 {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    h4 {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blue};
    margin-left: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Content = styled.p`
  flex-basis: 100%;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (min-width: 768px) {
    flex-basis: calc(100% - 72px);
    margin-left: auto;
  }
`;

export const RepliesList = styled.ul`
  margin-left: auto;
  width: 90%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 5%;
    left: calc(-11.1% + 20px);
    width: 2px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    height: 95%;
    opacity: 0.1;
  }
`;

export const SpinnerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
