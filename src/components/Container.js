import styled from 'styled-components';
import { Box } from 'rebass';

const CommonContainer = styled(Box).attrs({
  alignItems: 'center',
  w: 1,
  mx: 'auto',
})`
  height: 100vh;
  width: 100vw;
  position: fixed;
  text-align: center;
`;

export default CommonContainer;
