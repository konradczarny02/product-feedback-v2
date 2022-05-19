import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 460px;
  width: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 32px auto 0;
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin-bottom: 40px;
  }
  h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 24px;
    text-align: center;
  }
  @media (min-width: 768px) {
    max-width: 900px;
  }
`;
