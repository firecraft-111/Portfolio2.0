import React from 'react';
import { OrbitControls,PerspectiveCamera, RenderTexture, Text, Html} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Cube() {
    useFrame(state=>console.log(state  ))
  return (
    <mesh>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera
                    makedefault
                    position={[0,0,2]}
                />
                <color attach="background" args={["#dc9dcd"]}/>
                <Text fontSize={2} color="#555">
                    hello 
                </Text>
                </RenderTexture>
                </meshStandardMaterial>
            </mesh>
  )
}

export default Cube