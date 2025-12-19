import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import * as THREE from 'three';

export default function CameraHandler({ viewState, selectedBuildingPosition }) {
    const controlsRef = useRef();
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (!controlsRef.current) return;

        const controls = controlsRef.current;

        // Reset settings
        controls.minDistance = 5;
        controls.maxDistance = 200;
        controls.enabled = false; // Disable manual control by default during transitions

        const animateCamera = async () => {
            switch (viewState) {
                case 'intro':
                    // High altitude, looking down
                    await controls.setLookAt(
                        0, 80, 80, // position
                        0, 0, 0,   // target
                        true       // transition
                    );
                    break;

                case 'village':
                    // Aerial iso view
                    await controls.setLookAt(
                        40, 40, 40,
                        0, 0, 0,
                        true
                    );
                    break;

                case 'city':
                    // Closer orbit view
                    await controls.setLookAt(
                        20, 20, 20,
                        0, 0, 0,
                        true
                    );
                    controls.enabled = true; // Enable orbit for city exploration
                    controls.maxPolarAngle = Math.PI / 2.2; // Don't go below ground
                    break;

                case 'detail':
                    if (selectedBuildingPosition) {
                        // Zoom in to the specific building
                        // Add an offset to look slightly down and from the front
                        const [x, y, z] = selectedBuildingPosition;
                        await controls.setLookAt(
                            x + 10, y + 10, z + 10, // Position offset
                            x, y, z,                // Target the building
                            true
                        );
                        controls.enabled = true; // Allow slight rotation around building
                    }
                    break;

                default:
                    break;
            }
        };

        animateCamera();

    }, [viewState, selectedBuildingPosition]);

    return <CameraControls ref={controlsRef} smoothTime={1.5} />;
}
