import { Wrapper, ListsWrapper } from './RoadmapList.styles';
import { Status, StatusDescription, suggestionResponse } from '../../../types/types';
import { useEffect, useState } from 'react';

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
      <h2>{`${active} (${number})`}</h2>
      <p>{description}</p>
      <ListsWrapper active={active}>
        <ul>
          {plannedSuggestions.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.title}</li>
          ))}
        </ul>
        <ul>
          {inProgressSuggestions.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.title}</li>
          ))}
        </ul>
        <ul>
          {liveSuggestions.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.title}</li>
          ))}
        </ul>
      </ListsWrapper>
    </Wrapper>
  );
};

export default RoadmapList;
