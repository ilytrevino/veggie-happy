import styled from 'styled-components';
import { Card } from 'rebass';

const LoginRegisterCard = styled(Card).attrs({
  width: 0.9,
  px: 5,
  py: 3,
  mx: 'auto',
  my: 5,
  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)'
})`
  background:rgba(255,255,255,0.95);
  border-radius: 2rem;
  position: relative;
  text-align: center;
  top: -100vh;
`;

export default LoginRegisterCard;
