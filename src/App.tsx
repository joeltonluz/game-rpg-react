import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

function App() {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  },[]);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        char.moveLeft();
      break;

      case 'ArrowUp':
      case 'KeyW':
        char.moveUp();
      break;

      case 'ArrowRight':
      case 'KeyD':
        char.moveRight();
      break;

      case 'ArrowDown':
      case 'KeyS':
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
        
      </C.Map>
    </C.Container>
  );
}

export default App;
