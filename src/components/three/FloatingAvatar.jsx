import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Sphere, Torus, Ring } from '@react-three/drei'
import * as THREE from 'three'

function HologramCore() {
  const meshRef = useRef()
  const torusRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.4
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
    torusRef.current.rotation.z = t * 0.6
    ring1Ref.current.rotation.x = t * 0.8
    ring2Ref.current.rotation.y = t * 0.5
  })

  return (
    <group>
      {/* Core sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0}
            metalness={0.8}
            emissive="#3730a3"
            emissiveIntensity={0.3}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[1.6, 0.025, 16, 100]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
      </Torus>

      {/* Rings */}
      <Ring ref={ring1Ref} args={[1.3, 1.35, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring2Ref} args={[2, 2.04, 64]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#6366f1" transparent opacity={0.3} side={THREE.DoubleSide} />
      </Ring>

      {/* Satellite dots */}
      {[0, 1, 2, 3, 4].map(i => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 1.8,
            Math.sin((i / 5) * Math.PI * 2) * 0.5,
            0
          ]}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={['#6366f1','#22d3ee','#a855f7','#00ff88','#f59e0b'][i]} />
        </mesh>
      ))}
    </group>
  )
}

export default function FloatingAvatar() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} color="#6366f1" intensity={2} />
        <pointLight position={[-3, -3, 3]} color="#22d3ee" intensity={1.5} />
        <pointLight position={[0, 3, -3]} color="#a855f7" intensity={1} />
        <HologramCore />
      </Canvas>
    </div>
  )
}
