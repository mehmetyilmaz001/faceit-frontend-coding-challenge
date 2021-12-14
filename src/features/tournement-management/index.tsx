import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournaments } from '../../actions/tournaments';
import Button from '../../components/Button';
import FlexContainer from '../../components/FlexContainer';
import Input from '../../components/Input';
import FailState from './components/FailState';
import LoadingState from './components/LoadingState';
import { tournamentsSelector } from '../../selectors/tournaments';
import { Tournement } from './types';
import TournementCard from './components/TournementCard';
import styled from 'styled-components';

const TournementLister = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  flex-wrap: wrap;
`;

interface TournementManagamentProps {}

const TournementManagament: FunctionComponent<TournementManagamentProps> = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(tournamentsSelector);

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  useEffect(() => {
    console.log('list', list);
  }, [list]);

  return (
    <FlexContainer direction="column" justify="center">
      <FlexContainer direction="row" justify="space-between">
        <Input placeholder="Search tournament..." />
        <Button>CREATE TOURNEMENT</Button>
      </FlexContainer>
      {/*Toolbar*/}

      {loading && <LoadingState />}

      {list.length < 1 ? <FailState onRetry={() => {}} /> : <></>}

      <TournementLister>
        {list.map((i: Tournement) => (
          <TournementCard
            key={i.id}
            tournement={i}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        ))}
      </TournementLister>
    </FlexContainer>
  );
};

export default TournementManagament;
