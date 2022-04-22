import {React, useRef, useState} from 'react'
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer, DotScreen  } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

var rotationScale = 3;  

function HeadMesh({mouseX, mouseY}){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rx, setRX] = useState(0);
    const [ry, setRY] = useState(Math.PI / 1.47);

    const refMesh = useRef();
    const { nodes } = useLoader(GLTFLoader, './3d/head.gltf');
    
    useFrame(() => {
        setX((mouseY / window.innerHeight - 0.5) / rotationScale);
        setY(Math.PI / 1.47 + (mouseX / window.innerWidth - 0.5) / rotationScale);
        Math.abs(rx - x) < 0.002 ? setRX(x) : setRX(rx + (x - rx) * 0.2);
        Math.abs(ry - y) < 0.002 ? setRY(y) : setRY(ry + (y - ry) * 0.2);
        refMesh.current.rotation.x = rx;
        refMesh.current.rotation.y = ry;
    })

    return (
        <mesh rotation={[0, Math.PI / 1.47, 0]} position={[-0.06,-0.21,0]} geometry={nodes.head.geometry} ref={refMesh}>
            <meshStandardMaterial transparent opacity={1} color={"#ffffff"} roughness={0.5} metalness={0.3} />
        </mesh>
    )
}

function Head({isFrontpage, hover, mouseX, mouseY}) {
    return (
        <Canvas 
            frameloop={isFrontpage ? "always" : "never"} 
            className={(hover !== "") ? "blur" : ""} 
            id="head-fiber" 
            camera={{ fov: 25, near: 0.1, far: 10, position: [0, 0, 0.85] }} 
            // onCreated={state => state.gl.setClearColor("white")}
        >
            <HeadMesh mouseX={mouseX} mouseY={mouseY} />
            <color attach="background" args={["white"]} />
            <pointLight color="white" position={[0, 0, 2]} intensity={3} />
            <EffectComposer>
                <DotScreen blendFunction={BlendFunction.OVERLAY} angle={Math.PI /2} scale={0.65} />
            </EffectComposer>
        </Canvas>
    )
}


export default Head;



