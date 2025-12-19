import React, { useMemo, useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function CityModel({ viewState, onBuildingSelect }) {
    const hoverColor = new THREE.Color('#d4b483'); // Gold-ish
    const defaultColor = new THREE.Color('#e0e0e0'); // Light grey

    // Generate a random city layout
    const buildings = useMemo(() => {
        const items = [];
        const gridSize = 4;
        const spacing = 6;

        let count = 0;
        for (let x = -gridSize; x <= gridSize; x++) {
            for (let z = -gridSize; z <= gridSize; z++) {
                // Skip some to make it look like a planned community, not a dense block
                if (Math.random() > 0.6) continue;

                count++;
                items.push({
                    id: count,
                    position: [x * spacing, 0, z * spacing],
                    // Random height
                    toScale: [4, Math.random() * 4 + 2, 4],
                    rotation: [0, Math.random() * 0.5, 0],
                    unitCount: Math.floor(Math.random() * 50) + 20
                });
            }
        }
        return items;
    }, []);

    return (
        <group>
            {/* Ground Plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#3a4f41" /> {/* Dark Green */}
            </mesh>

            {/* Buildings */}
            {buildings.map((building) => (
                <BuildingMesh
                    key={building.id}
                    building={building}
                    viewState={viewState}
                    onSelect={onBuildingSelect}
                    defaultColor={defaultColor}
                    hoverColor={hoverColor}
                />
            ))}
        </group>
    );
}

function BuildingMesh({ building, viewState, onSelect, defaultColor, hoverColor }) {
    const [hovered, setHovered] = useState(false);

    // Only show markers in City mode
    const showMarker = viewState === 'city';

    return (
        <group position={building.position} rotation={building.rotation}>
            <mesh
                position={[0, building.toScale[1] / 2, 0]}
                castShadow
                receiveShadow
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
                onPointerOut={(e) => setHovered(false)}
                onClick={(e) => {
                    if (viewState === 'city') {
                        e.stopPropagation();
                        onSelect(building.id, building.position);
                    }
                }}
            >
                <boxGeometry args={building.toScale} />
                <meshStandardMaterial color={hovered && viewState === 'city' ? hoverColor : defaultColor} />
            </mesh>

            {/* Interactive Marker */}
            {showMarker && (
                <Html position={[0, building.toScale[1] + 2, 0]} center distanceFactor={15}>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(building.id, building.position);
                        }}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            transform: hovered ? 'scale(1.2)' : 'scale(1)'
                        }}
                    >
                        <div className={`
                rounded-circle d-flex align-items-center justify-content-center shadow-sm
                ${hovered ? 'bg-warning text-dark' : 'bg-white text-secondary'}
            `}
                            style={{ width: '40px', height: '40px', fontWeight: 'bold', border: '2px solid white' }}
                        >
                            {building.unitCount}
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
