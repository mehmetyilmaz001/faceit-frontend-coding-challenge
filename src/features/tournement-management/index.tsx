import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTournament,
  deleteTournament,
  getTournaments,
  searchTournament,
  updateTournament
} from '../../actions/tournaments';
import Button from '../../components/Button';
import FlexContainer from '../../components/FlexContainer';
import Input from '../../components/Input';
import FailState from './components/FailState';
import LoadingState from './components/LoadingState';
import { tournamentsSelector } from '../../selectors/tournaments';
import { Tournement } from './types';
import TournamentCard from './components/TournementCard';
import styled from 'styled-components';

const TournamentLister = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  flex-wrap: wrap;
`;

interface TournementManagamentProps {}

const TournementManagament: FunctionComponent<TournementManagamentProps> = () => {
  const dispatch = useDispatch();
  const { list, loading, hasError } = useSelector(tournamentsSelector);

  const [search, setSearch] = React.useState('');

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  const _onCreate = () => {
    const newTournamentName = window.prompt('New Tournament Name');

    if (newTournamentName) {
      dispatch(createTournament(newTournamentName));
    }
  };

  const _onDelete = (id: string) => {
    dispatch(deleteTournament(id));
  };

  const _onEdit = (tournament: Tournement) => {
    dispatch(updateTournament(tournament));
  };

  const _onSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(searchTournament(search));
    }
  };

  const tournamantListComponent = (
    <TournamentLister>
      {list.map((i: Tournement) => (
        <TournamentCard
          key={i.id}
          tournament={i}
          onDelete={_onDelete}
          onEdit={_onEdit}
        />
      ))}
    </TournamentLister>
  );

  return (
    <FlexContainer direction="column" justify="center">
      <FlexContainer direction="row" justify="space-between">
        <Input
          placeholder="Search tournament..."
          onChange={e => setSearch(e.target.value)}
          onKeyDown={_onSearch}
        />
        <Button onClick={_onCreate}>CREATE TOURNEMENT</Button>
      </FlexContainer>
      {/*Toolbar*/}

      {loading ? (
        <LoadingState />
      ) : (
        <>
          {hasError ? (
            <FailState onRetry={() => dispatch(getTournaments())} />
          ) : (
            tournamantListComponent
          )}
        </>
      )}
    </FlexContainer>
  );
};

export default TournementManagament;
