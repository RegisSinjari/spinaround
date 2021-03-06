import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z += 0.03))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
          
      <boxGeometry args={[3, 3, 5]} />
      <meshBasicMaterial color= 'red' />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <ambientLight intensity={0.5}/>
    <pointLight position={[10, 10, 10]} />
    <Box rotation={[1,1.5,0]}  />
  </Canvas>,
  document.getElementById('root'),
)
export default Box