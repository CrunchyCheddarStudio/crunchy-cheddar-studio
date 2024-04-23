"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Cheese(props) {
    const { nodes, materials } = useGLTF('/models/stylized_yummy_cheeze.glb')

    const modelRef = useRef()

    useFrame((state, delta, xrFrame) => {
        modelRef.current.position.y = -0.75 + Math.sin(state.clock.elapsedTime) * 0.15;
    })

    return (
        <group {...props} dispose={null}
            ref={modelRef}
            position={[0, 0, 0]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[0.25, 0.75, 0]}
        >
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.13}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.cheeze1aiStandardSurface1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.cheeze1aiStandardSurface1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.cheeze1aiStandardSurface1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.cheeze1aiStandardSurface1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.cheeze1aiStandardSurface2SG}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/stylized_yummy_cheeze.glb')