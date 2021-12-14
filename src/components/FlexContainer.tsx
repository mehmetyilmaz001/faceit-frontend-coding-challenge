import styled from 'styled-components';

const FlexContainer = styled.div<{
  direction?: string;
  gap?: number;
  justify?: string;
}>`
  display: flex;
  flex-direction: ${p => p.direction || 'column'};
  justify-content: ${p => p.justify || 'flex-start'};
  gap: ${p => p.gap || 1}rem;
`;

export default FlexContainer;
