import React, { FunctionComponent } from 'react';
import Button from '../../../components/Button';
import FlexContainer from '../../../components/FlexContainer';

interface FailStateProps {
  onRetry: () => void;
}

const FailState: FunctionComponent<FailStateProps> = ({ onRetry }) => {
  return (
    <FlexContainer justify="center">
      Something went wrong
      <Button onClick={onRetry}>RETRY</Button>
    </FlexContainer>
  );
};

export default FailState;
