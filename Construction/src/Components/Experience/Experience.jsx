import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import CameraHandler from './CameraHandler';
import CityModel from './CityModel';

export default function Experience({ viewState, onBuildingSelect, selectedBuildingPosition }) {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 80, 80] }}>
            <Suspense fallback={null}>
                {/* State Logic */}
                <CameraHandler viewState={viewState} selectedBuildingPosition={selectedBuildingPosition} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[50, 50, 50]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                />
                <Environment preset="city" />

                {/* Scene Content */}
                <group position={[0, -2, 0]}>
                    <CityModel viewState={viewState} onBuildingSelect={onBuildingSelect} />

                    {/* Soft ground shadows */}
                    <ContactShadows resolution={1024} scale={100} blur={2} opacity={0.5} far={10} color="#000000" />
                </group>

                {/* Fog to blend edges */}
                <fog attach="fog" args={['#d0d0d0', 10, 150]} />
                <color attach="background" args={['#d0d0d0']} />

            </Suspense>
        </Canvas>
    );
}
