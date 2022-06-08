import styled from 'styled-components';

type Props = {
  isUpvoted: boolean;
};

export const StyledUpvotes = styled.div<Props>`
  width: 72px;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, isUpvoted }) => (isUpvoted ? theme.colors.blue : theme.colors.lightGray)};
  margin-right: auto;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, isUpvoted }) => (isUpvoted ? theme.colors.blue : theme.colors.hover)};
  }
  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme, isUpvoted }) => (isUpvoted ? theme.colors.white : theme.colors.darkBlue)};
    margin: 0;
  }

  path {
    stroke: ${({ theme, isUpvoted }) => (isUpvoted ? theme.colors.white : theme.colors.blue)};
  }
`;
