import logo from './logo.svg';
import './App.css';
import Box from './box';
import './customtest.css';
import { Canvas, useFrame } from '@react-three/fiber'
import Search from './array';
import Parent from './parent';
import 'semantic-ui-css/semantic.min.css';
function App() {
  return (
    <div>
      <Search />
      <Parent />
      
    </div>
  );
}

export default App;
