import styled from 'styled-components';

const FlexContainer = styled.div<{
  direction?: string;
  gap?: number;
  justify?: string;
  align?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${p => p.direction || 'column'};
  justify-content: ${p => p.justify || 'flex-start'};
  align-items: ${p => p.align || 'flex-start'};
  gap: ${p => p.gap || 1}rem;
`;

export default FlexContainer;
