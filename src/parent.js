import './App.css';
import {useState}  from 'react';
import Child from './child';
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './box';
function Parent() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata)
    console.log("test");
  }

  return (
    <div className="App">
     
      <div>
      {data}
        <Child childToParent={childToParent}/>

        <Canvas>
            <Box />
        </Canvas>
      </div>
    </div>
  );
}

export default Parent;