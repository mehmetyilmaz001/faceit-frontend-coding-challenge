import React, { FunctionComponent } from 'react';
import FlexContainer from '../../components/FlexContainer';
import Input from '../../components/Input';
import FailState from './components/FailState';
import LoadingState from './components/LoadingState';

interface TournementManagamentProps {}

const TournementManagament: FunctionComponent<TournementManagamentProps> = () => {
  return (
    <FlexContainer direction="column">
      <Input placeholder="Search tournament..." />
      <LoadingState />
      <FailState onRetry={() => {}} />
    </FlexContainer>
  );
};

export default TournementManagament;
