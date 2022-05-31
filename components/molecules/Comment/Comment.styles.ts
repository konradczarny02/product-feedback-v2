import styled from 'styled-components';

export const StyledComment = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
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

export const CommentReply = styled.form<{ isReplying: boolean }>`
  display: ${({ isReplying }) => (isReplying ? 'flex' : 'none')};
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

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
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
  }

  @media (min-width: 768px) {
    flex-basis: calc(100% - 72px);
    margin-left: auto;
  }
`;
