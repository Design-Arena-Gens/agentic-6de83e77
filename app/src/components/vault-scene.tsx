"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function VaultCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y += 0.0045;
    groupRef.current.rotation.x = Math.sin(t / 3) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <cylinderGeometry args={[1.8, 1.8, 0.6, 64, 16, false]} />
        <meshStandardMaterial
          color="#121c2f"
          metalness={0.95}
          roughness={0.25}
        />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 0.6, 6, 1, true]} />
        <meshStandardMaterial
          color="#18284a"
          metalness={0.9}
          roughness={0.18}
          side={THREE.DoubleSide}
          emissive="#1a3a6d"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh position={[0, 0, 0.24]}>
        <circleGeometry args={[1.05, 64]} />
        <meshStandardMaterial
          color="#0f2038"
          metalness={0.98}
          roughness={0.12}
        />
      </mesh>
      <mesh position={[0, 0, 0.27]}>
        <torusGeometry args={[0.92, 0.06, 32, 128]} />
        <meshStandardMaterial
          color="#4cd1ff"
          metalness={1}
          roughness={0.05}
          emissive="#1b4f73"
          emissiveIntensity={0.7}
        />
      </mesh>
      <mesh position={[0, 0, -0.24]}>
        <circleGeometry args={[1.02, 64]} />
        <meshStandardMaterial
          color="#0d1732"
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>
      <mesh position={[0, 0, 0.35]}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color="#73f6ff"
          metalness={0.85}
          roughness={0.28}
          emissive="#24548d"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function VaultRings() {
  const innerRing = useRef<THREE.Mesh>(null);
  const outerRing = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (innerRing.current) {
      innerRing.current.rotation.z = t * 0.25;
    }
    if (outerRing.current) {
      outerRing.current.rotation.z = -t * 0.18;
    }
  });

  return (
    <group>
      <mesh ref={innerRing} scale={1.3}>
        <torusGeometry args={[2.2, 0.05, 32, 256]} />
        <meshStandardMaterial
          color="#3ba3ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#0e375f"
          emissiveIntensity={0.65}
        />
      </mesh>
      <mesh ref={outerRing} scale={1.45}>
        <torusGeometry args={[3.1, 0.08, 32, 256]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.9}
          roughness={0.15}
          emissive="#0a2a42"
          emissiveIntensity={0.55}
        />
      </mesh>
    </group>
  );
}

function VaultParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 450;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i += 1) {
      const angle = i * goldenAngle;
      const radius = 2.4 + ((i % 89) / 89) * 1.8;
      const y = ((i % 47) - 23) * 0.045;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const hue = 0.55 + ((i % 23) / 23) * 0.08;
      const lightness = 0.6 - ((i % 17) / 17) * 0.08;
      color.setHSL(hue, 0.7, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function VaultHalo() {
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!haloRef.current) return;
    const scale = 1.35 + Math.sin(state.clock.elapsedTime * 1.4) * 0.05;
    haloRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={haloRef}>
      <ringGeometry args={[2.4, 2.7, 128]} />
      <meshBasicMaterial
        color="#70f5ff"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function VaultScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 32 }}
      gl={{ antialias: true }}
      dpr={[1.5, 2]}
    >
      <color attach="background" args={["#050716"]} />
      <ambientLight intensity={0.65} />
      <spotLight
        position={[6, 8, 8]}
        angle={0.48}
        penumbra={0.9}
        intensity={2.8}
        color="#5b9aff"
      />
      <spotLight
        position={[-6, -8, -6]}
        angle={0.48}
        penumbra={0.6}
        intensity={1.4}
        color="#1b2f6f"
      />
      <Suspense fallback={null}>
        <VaultParticles />
        <VaultHalo />
        <VaultRings />
        <VaultCore />
        <Environment preset="night" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate />
    </Canvas>
  );
}
