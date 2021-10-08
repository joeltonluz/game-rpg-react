import * as C from './styles';
import { characterSides } from '../../types/characterSides';

type Props = {
  x: number;
  y: number;
  side: characterSides;
}

export const Character = ({ x, y, side}: Props) => {
  const sizeChar = 30;

  const positionSide = {
    left: -30,
    up: -90,
    right: -60,
    down: 0,
  }

  return(
    <C.Container
      size={sizeChar}
      left={x * sizeChar}
      top={y * sizeChar}
      posSide={positionSide[side] ?? 0}
    >
    </C.Container>
  );
}