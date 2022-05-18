import styled from 'styled-components';

export const Wrapper = styled.div`
  h3 {
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    font-weight: 500;
    font-size: 15px};
    color: ${({ theme }) => theme.colors.white};
    @media (min-width: 768px) {
      font-size: 15px;
    }
  }
`;
