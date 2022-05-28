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
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    flex-wrap: wrap;
    list-style: none;
    grid-template-rows: repeat(auto-fill, 230px);
    row-gap: 24px;

    @media (min-width: 768px) {
      grid-template-rows: repeat(auto-fill, 250px);
      row-gap: 10px;
    }

    @media (min-width: 1440px) {
      grid-template-rows: repeat(auto-fill, 270px);
    }
  }

  ul:nth-child(1) {
    display: ${({ active }) => (active === 'Planned' ? 'grid' : 'none')};

    li {
      border-top: ${({ theme }) => `6px solid ${theme.colors.orange}`};
    }
  }
  ul:nth-child(2) {
    display: ${({ active }) => (active === 'In-Progress' ? 'grid' : 'none')};

    li {
      border-top: ${({ theme }) => `6px solid ${theme.colors.pink}`};
    }
  }
  ul:nth-child(3) {
    display: ${({ active }) => (active === 'Live' ? 'grid' : 'none')};

    li {
      border-top: ${({ theme }) => `6px solid ${theme.colors.lightBlue}`};
    }
  }

  @media (min-width: 768px) {
    ul:nth-child(1),
    ul:nth-child(2),
    ul:nth-child(3) {
      display: grid;
    }
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatusInfo = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StatusDesc = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (min-width: 768px) {
    display: none;
  }
`;
