import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FormWrapper = styled.form`
  width: 100%;
  margin-top: 24px;
  padding: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;

  h3 {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 12px;
  }

  textarea {
    resize: none;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    border-radius: 10px;
    flex-basis: 100%;
    height: 80px;
    margin: 12px 0;
    padding: 16px;
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  p {
    margin-top: 12px;
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    flex-basis: 50%;
  }

  ${ButtonWrapper} {
    flex-basis: 50%;
    margin-top: 12px;

    button {
      width: 120px;
      height: 40px;
      background: ${({ theme }) => theme.colors.pink};
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.darkerWhite};
    }
  }
`;
