import styled from 'styled-components';
import { Status } from '../../../types/types';

export const NavigationWrapper = styled.nav<{ active: Status }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 0 24px;

  div {
    display: flex;
    justify-content: center;
    cursor: pointer;
    flex-wrap: wrap;

    h3 {
      padding-bottom: 20px;
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    p {
      display: none;
    }
  }

  div:nth-child(1) {
    border-bottom: ${({ theme, active }) =>
      active === 'Planned' ? `4px solid ${theme.colors.orange}` : `1px solid ${theme.colors.gray}`};

    h3 {
      opacity: ${({ active }) => (active === 'Planned' ? 1 : 0.3)};
    }
  }
  div:nth-child(2) {
    border-bottom: ${({ theme, active }) =>
      active === 'In-Progress' ? `4px solid ${theme.colors.pink}` : `1px solid ${theme.colors.gray}`};

    h3 {
      opacity: ${({ active }) => (active === 'In-Progress' ? 1 : 0.3)};
    }
  }
  div:nth-child(3) {
    border-bottom: ${({ theme, active }) =>
      active === 'Live' ? `4px solid ${theme.colors.lightBlue}` : `1px solid ${theme.colors.gray}`};

    h3 {
      opacity: ${({ active }) => (active === 'Live' ? 1 : 0.3)};
    }
  }

  @media (min-width: 768px) {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto 24px;
    grid-gap: 10px;

    div {
      justify-content: flex-start;

      h3 {
        padding-bottom: 0;
        margin-bottom: 4px;
      }

      p {
        color: ${({ theme }) => theme.colors.darkBlue};
        flex-basis: 100%;
        display: block;
        opacity: 0.8;
      }
    }

    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3) {
      border-bottom: none;
      h3 {
        opacity: 1;
        font-size: 14px;
      }
    }
  }
`;
