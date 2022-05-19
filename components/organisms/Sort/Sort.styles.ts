import styled from 'styled-components';

export const SortWrapper = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGray};
  }
  span {
    display: none;
  }
  svg {
    display: none;
  }
  select {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 14px;
    font-weight: 700;
    background: transparent;
    border: none;
    margin-left: 4px;
    &:focus {
      outline: none;
    }
  }
  @media (min-width: 768px) {
    height: 72px;
    width: 90%;
    max-width: 900px;
    border-radius: 10px;
    margin: 40px auto 24px;
    justify-content: flex-start;
    span {
      display: block;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      margin: 0 36px 0 16px;
    }
    a {
      margin-left: auto;
    }
    svg {
      display: block;
    }
  }
  @media (min-width: 1440px) {
    grid-column: 2/3;
    margin-top: 0;
  }
`;
