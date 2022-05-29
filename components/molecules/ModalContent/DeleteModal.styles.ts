import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    button {
      flex-basis: 47%;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};
      height: 40px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
    button:first-child {
      background-color: ${({ theme }) => theme.colors.error};
    }
    button:last-child {
      background-color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;
