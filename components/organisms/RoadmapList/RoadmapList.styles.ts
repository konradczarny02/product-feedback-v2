import styled from 'styled-components';
import { Status } from '../../../types/types';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 0 5%;

  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0;
  }
`;

export const ListsWrapper = styled.div<{ active: Status }>`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      flex-basis: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 5%;
      border-radius: 10px;
      border-top: ${({ theme, active }) => {
        if (active === 'Planned') {
          return `6px solid ${theme.colors.orange}`;
        } else if (active === 'In-Progress') {
          return `6px solid ${theme.colors.pink}`;
        } else {
          return `6px solid ${theme.colors.lightBlue}`;
        }
      }};
    }
  }

  ul:nth-child(1) {
    display: ${({ active }) => (active === 'Planned' ? 'flex' : 'none')};
  }
  ul:nth-child(2) {
    display: ${({ active }) => (active === 'In-Progress' ? 'flex' : 'none')};
  }
  ul:nth-child(3) {
    display: ${({ active }) => (active === 'Live' ? 'flex' : 'none')};
  }

  @media (min-width: 768px) {
    ul:nth-child(1),
    ul:nth-child(2),
    ul:nth-child(3) {
      display: flex;
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;
