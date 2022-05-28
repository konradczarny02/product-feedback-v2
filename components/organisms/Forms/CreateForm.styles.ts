import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Heading = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
`;

export const StyledForm = styled.form<{ errors: any; submitVal: 'Add Feedback' | 'Success' }>`
  height: 720px;
  width: 100%;
  padding: 5%;
  margin: 55px auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  ${Title} {
    margin: 24px 0 24px;
  }
  ${Heading} {
    margin-bottom: 4px;
  }
  ${Description} {
    margin-bottom: 16px;
  }
  input[type='text'] {
    height: 48px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 15px;
    font-weight: 400;
    position: relative;
    outline: ${({ theme, errors }) => {
      if (errors.title) {
        return `1px solid ${theme.colors.error}`;
      } else {
        return `none`;
      }
    }};
    &:focus {
      outline: ${({ theme, errors }) => {
        if (errors.title) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `1px solid ${theme.colors.blue}`;
        }
      }};
    }
  }
  select {
    height: 48px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 15px;
    font-weight: 400;
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }
  textarea {
    height: 120px;
    margin-bottom: 40px;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border-radius: 8px;
    border: none;
    resize: none;
    font-size: 15px;
    font-weight: 400;
    outline: ${({ theme, errors }) => {
      if (errors.details) {
        return `1px solid ${theme.colors.error}`;
      } else {
        return `none`;
      }
    }};
    &:focus {
      outline: ${({ theme, errors }) => {
        if (errors.details) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `1px solid ${theme.colors.blue}`;
        }
      }};
    }

    @media (min-width: 768px) {
      height: 96px;
    }
  }
  input[type='submit'] {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 700;
    background-color: ${({ theme, submitVal }) => (submitVal === 'Add Feedback' ? theme.colors.pink : theme.colors.success)};
    border: none;
    border-radius: 8px;
    margin-bottom: 16px;
    flex-basis: 100%;
    @media (min-width: 768px) {
      padding: 0 24px;
      flex-basis: auto;
      order: 2;
      margin-left: 16px;
    }
  }
  input[type='reset'] {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border: none;
    border-radius: 8px;
    flex-basis: 100%;
    @media (min-width: 768px) {
      padding: 0 24px;
      flex-basis: auto;
    }
  }

  div:last-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    input {
      cursor: pointer;
    }
  }
`;

export const StyledError = styled.p<{ margin: number; padding: number }>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ margin }) => margin + 'px'};
  padding-bottom: ${({ padding }) => padding + 'px'};
  padding-left: 2px;
`;
