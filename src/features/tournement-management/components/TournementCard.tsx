import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import H6 from '../../../components/H6';
import theme from '../../../theme';
import { Tournement } from '../types';

interface TournementCardProps {
  tournement: Tournement;
  onEdit: (tournement: Tournement) => void;
  onDelete: (id: string) => void;
}

const CardContainer = styled.div`
  background: ${theme.palette.background.base};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(4)};
  gap: ${theme.spacing(2)};
`;

const ButtonsContiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: ${theme.spacing(1.8)};
`;

const TournementCard: FunctionComponent<TournementCardProps> = ({
  tournement,
  onEdit,
  onDelete
}) => {
  const startDate = new Date(tournement.startDate);

  const openEditPropt = () => {
    const name = window.prompt('New tournament name', tournement.name);
    if (name) {
      onEdit({
        ...tournement,
        name
      });
    }
  };

  return (
    <CardContainer>
      <H6>{tournement.name}</H6>

      <div className="meta-data">
        Organizer: {tournement.organizer || ''} <br />
        Game: {tournement.game || ''} <br />
        Participants:{' '}
        {`${tournement.participants.current}/${tournement.participants.max}`}{' '}
        <br />
        Start: {startDate.toLocaleString('en-GB')} <br />
      </div>

      <ButtonsContiner>
        <Button onClick={openEditPropt}>EDIT</Button>
        <Button onClick={() => onDelete(tournement.id)}>DELETE</Button>
      </ButtonsContiner>
    </CardContainer>
  );
};

export default TournementCard;
