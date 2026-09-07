import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars({ count = 4000 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 25
      arr[i * 3 + 1] = (Math.random() - 0.5) * 25
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return arr
  }, [count])

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.03
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#6366f1" size={0.035} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  )
}

function NeuralNetwork() {
  const ref = useRef()
  const nodes = useMemo(() => {
    const n = []
    for (let i = 0; i < 30; i++) {
      n.push({
        x: (Math.random() - 0.5) * 12,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6,
      })
    }
    return n
  }, [])

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.08
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.15
  })

  return (
    <group ref={ref}>
      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#22d3ee' : '#a855f7'} />
        </mesh>
      ))}
    </group>
  )
}

export default function ParticleField({ height = '100vh' }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, height }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 70 }} gl={{ antialias: false, alpha: true }}>
        <Stars />
        <NeuralNetwork />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} color="#6366f1" intensity={0.5} />
        <pointLight position={[-5, -5, 5]} color="#22d3ee" intensity={0.3} />
      </Canvas>
    </div>
  )
}
