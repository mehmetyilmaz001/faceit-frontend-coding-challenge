import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import H6 from '../../../components/H6';
import theme from '../../../theme';
import { Tournement } from '../types';

interface TournamentCardProps {
  tournament: Tournement;
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

const TournamentCard: FunctionComponent<TournamentCardProps> = ({
  tournament,
  onEdit,
  onDelete
}) => {
  const startDate = new Date(tournament.startDate);

  const openEditPropt = () => {
    const name = window.prompt('New tournement name', tournament.name);
    if (name) {
      onEdit({
        ...tournament,
        name
      });
    }
  };

  return (
    <CardContainer>
      <H6>{tournament.name}</H6>

      <div className="meta-data">
        Organizer: {tournament.organizer || ''} <br />
        Game: {tournament.game || ''} <br />
        Participants:{' '}
        {`${tournament.participants.current}/${tournament.participants.max}`}{' '}
        <br />
        Start: {startDate.toLocaleString('en-GB')} <br />
      </div>

      <ButtonsContiner>
        <Button onClick={openEditPropt}>EDIT</Button>
        <Button onClick={() => onDelete(tournament.id)}>DELETE</Button>
      </ButtonsContiner>
    </CardContainer>
  );
};

export default TournamentCard;
