import styled from 'styled-components';

export const StyledForm = styled.form<{ errors: any; submitValue: 'Save Changes' | 'Changes Saved' }>`
  position: relative;
  width: 100%;
  margin-top: 55px;
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 48px 0 12px;
  }

  label {
    margin: 12px 0;
    flex-basis: 100%;

    h4 {
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    p:nth-child(2) {
      font-size: 13px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkGray};
      margin-bottom: 16px;
    }
  }
  input,
  select {
    height: 48px;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  input[name='title'] {
    outline: ${({ theme, errors }) => (errors.title ? `1px solid ${theme.colors.error}` : `none`)};

    &:focus {
      outline: ${({ theme, errors }) => (errors.title ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.blue}`)};
    }
  }

  textarea {
    resize: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    height: 120px;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: ${({ errors }) => (errors.details ? '0' : '32px')};
    outline: ${({ theme, errors }) => (errors.details ? `1px solid ${theme.colors.error}` : `none`)};

    &:focus {
      outline: ${({ theme, errors }) => (errors.details ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.blue}`)};
    }
  }

  div:last-child {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    button {
      flex-basis: 100%;
      margin: 8px 0;
      border-radius: 10px;
      border: none;
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};
      height: 40px;
      padding: 0 24px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    button:first-child {
      background-color: ${({ theme, submitValue }) =>
        submitValue === 'Save Changes' ? theme.colors.pink : theme.colors.success};

      @media (min-width: 768px) {
        flex-basis: auto;
        order: 3;
        margin-left: 16px;
      }
    }

    button:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.darkBlue};

      @media (min-width: 768px) {
        flex-basis: auto;
        order: 2;
      }
    }

    button:nth-child(3) {
      background-color: ${({ theme }) => theme.colors.error};

      @media (min-width: 768px) {
        flex-basis: auto;
        order: 1;
        margin-right: auto;
      }
    }
  }
`;
