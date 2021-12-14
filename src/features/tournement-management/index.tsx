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

      {list.map((i: Tournement) => (
        <>{i.name}</>
      ))}
    </FlexContainer>
  );
};

export default TournementManagament;
