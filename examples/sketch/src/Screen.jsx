import { styled } from 'elemental-react';
import { Artboard } from 'react-sketchapp';
import { width, height, space, position } from 'styled-system';

const Screen = styled(Artboard)`
  ${width}
  ${position}
  ${space}
  ${height}
`;

Screen.defaultProps = {
  width: 360,
  position: 'relative',
  ml: 0,
};

export default Screen;
