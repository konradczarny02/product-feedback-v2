import styled from 'styled-components';

export const StyledForm = styled.form<{ errors: any }>`
  display: flex;
  margin-top: 24px;
  flex-basis: 100%;
  flex-wrap: wrap;

  label {
    flex-basis: 100%;
    display: flex;

    @media (min-width: 768px) {
      flex-basis: calc(100% - 144px);
    }
  }

  textarea {
    resize: none;
    height: 60px;
    padding: 16px;
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    flex-basis: 100%;
    outline: ${({ errors, theme }) => (errors ? `1px solid ${theme.colors.error}` : 'none')};

    &:focus {
      outline: ${({ errors, theme }) => (errors ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.blue}`)};
    }
  }

  input[type='submit'] {
    height: 32px;
    margin-top: 16px;
    margin-left: auto;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pink};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    padding: 0 16px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-basis: calc(100% - 72px);
    margin-left: auto;
  }
`;
