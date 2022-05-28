import styled from 'styled-components';
import { Status } from '../../../types/types';

export const ListItemWrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const StatusInfo = styled.h4<{ status: Status }>`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGray};
  position: relative;
  margin: 0 0 16px 16px;
  flex-basis: 100%;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: -8px;
    background-color: ${({ theme, status }) => {
      if (status === 'Planned') {
        return theme.colors.orange;
      } else if (status === 'In-Progress') {
        return theme.colors.pink;
      } else if (status === 'Live') {
        return theme.colors.lightBlue;
      }
    }};
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Title = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 8px;
  flex-basis: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  flex-basis: 100%;
  margin-bottom: 24px;
  font-size: 13px;

  @media (min-width: 1440px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const CategoryWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: 16px;
`;

export const UpvoteWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
