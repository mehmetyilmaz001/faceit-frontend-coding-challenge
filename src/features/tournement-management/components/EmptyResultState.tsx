import React, { FunctionComponent } from 'react';
import FlexContainer from '../../../components/FlexContainer';

interface EmptyResultStateProps {}

const EmptyResultState: FunctionComponent<EmptyResultStateProps> = () => {
  return (
    <FlexContainer justify="center" align="center">
      No tournaments found.
    </FlexContainer>
  );
};

export default EmptyResultState;
