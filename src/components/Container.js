import styled from 'styled-components';
import { Box } from 'rebass';

const CommonContainer = styled(Box).attrs({
  alignItems: 'center',
  w: 1,
  mx: 'auto',
})`
  box-sizing: content-box;
  max-width: 1300px;
  position: fixed;
  text-align: center;
`;

export default CommonContainer;
