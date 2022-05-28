import { Wrapper, ListsWrapper, StatusDesc, StatusInfo } from './RoadmapList.styles';
import { Status, StatusDescription, suggestionResponse } from '../../../types/types';
import { useEffect, useState } from 'react';
import RoadmapSuggestion from '../../molecules/RoadmapSuggestion/RoadmapSuggestion';

type Props = {
  plannedSuggestions: suggestionResponse[];
  inProgressSuggestions: suggestionResponse[];
  liveSuggestions: suggestionResponse[];
  active: Status;
};

const RoadmapList = ({ plannedSuggestions, inProgressSuggestions, liveSuggestions, active }: Props) => {
  const [number, setNumber] = useState(plannedSuggestions.length);
  const [description, setDescription] = useState<StatusDescription>('Ideas prioritized for research');

  useEffect(() => {
    switch (active) {
      case 'Planned':
        setNumber(plannedSuggestions.length);
        break;
      case 'In-Progress':
        setNumber(inProgressSuggestions.length);
        break;
      case 'Live':
        setNumber(liveSuggestions.length);
        break;
      default:
        setNumber(0);
    }
  }, [active]);

  useEffect(() => {
    switch (active) {
      case 'Planned':
        setDescription('Ideas prioritized for research');
        break;
      case 'In-Progress':
        setDescription('Features currently being developed');
        break;
      case 'Live':
        setDescription('Released features');
        break;
      default:
        setNumber(0);
    }
  }, [active]);

  return (
    <Wrapper>
      <StatusInfo>{`${active} (${number})`}</StatusInfo>
      <StatusDesc>{description}</StatusDesc>
      <ListsWrapper active={active}>
        <ul>
          {plannedSuggestions.map((suggestion) => (
            <RoadmapSuggestion key={suggestion.id} data={suggestion} />
          ))}
        </ul>
        <ul>
          {inProgressSuggestions.map((suggestion) => (
            <RoadmapSuggestion key={suggestion.id} data={suggestion} />
          ))}
        </ul>
        <ul>
          {liveSuggestions.map((suggestion) => (
            <RoadmapSuggestion key={suggestion.id} data={suggestion} />
          ))}
        </ul>
      </ListsWrapper>
    </Wrapper>
  );
};

export default RoadmapList;
