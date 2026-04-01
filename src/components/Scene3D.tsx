'use client'

import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </Float>
  )
}

function FloatingCube() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[2, 1, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.4} />
      </mesh>
    </Float>
  )
}

function FloatingSphere() {
  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.2}>
      <mesh position={[-2, -1, -1]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#c4b5fd" roughness={0.2} metalness={0.2} />
      </mesh>
    </Float>
  )
}

function TorusShape() {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh position={[1, -2, -2]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" roughness={0.3} metalness={0.4} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.6} />
        <pointLight position={[5, 5, 5]} color="#6366f1" intensity={0.3} />
        <FloatingShape />
        <FloatingCube />
        <FloatingSphere />
        <TorusShape />
      </Canvas>
    </div>
  )
}
