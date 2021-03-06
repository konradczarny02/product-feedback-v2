import { ListItemWrapper, Details, CategoryWrapper, UpvoteWrapper, Title, StatusInfo } from './RoadmapSuggestion.styles';
import Category from '../../atoms/Category/Category';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { ISuggestionResponse } from '../../../types/types';

type Props = {
  data: ISuggestionResponse;
};

const RoadmapSuggestion = ({ data: { id, title, comments, details, status, upvotes, category } }: Props) => {
  return (
    <ListItemWrapper>
      <StatusInfo status={status}>{status}</StatusInfo>
      <Title>{title}</Title>
      <Details>{details}</Details>
      <CategoryWrapper>
        <Category name={category} />
      </CategoryWrapper>
      <UpvoteWrapper>
        <Upvotes suggestionId={id} upvotesNumber={upvotes.length} />
        <CommentsNumber suggestionId={id} commentsNumber={comments ? comments.length : 0} />
      </UpvoteWrapper>
    </ListItemWrapper>
  );
};

export default RoadmapSuggestion;
