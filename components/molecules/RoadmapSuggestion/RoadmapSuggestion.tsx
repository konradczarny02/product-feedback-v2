import { ListItemWrapper, Details, CategoryWrapper, UpvoteWrapper, Title, StatusInfo } from './RoadmapSuggestion.styles';
import Category from '../../atoms/Category/Category';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { Status, Category as CategoryType } from '../../../types/types';

type Props = {
  data: {
    title: string;
    details: string;
    status: Status;
    category: CategoryType;
    upvotes: number;
    comments?: string[];
  };
};

const RoadmapSuggestion = ({ data: { title, comments, details, status, upvotes, category } }: Props) => {
  return (
    <ListItemWrapper>
      <StatusInfo status={status}>{status}</StatusInfo>
      <Title>{title}</Title>
      <Details>{details}</Details>
      <CategoryWrapper>
        <Category name={category} />
      </CategoryWrapper>
      <UpvoteWrapper>
        <Upvotes upvotesNumber={upvotes} />
        <CommentsNumber commentsNumber={comments ? comments.length : 0} />
      </UpvoteWrapper>
    </ListItemWrapper>
  );
};

export default RoadmapSuggestion;
