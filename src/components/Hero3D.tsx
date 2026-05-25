import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import type { Mesh } from "three";

function MorphingShape() {
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
    const target = hovered ? 1.1 : 1;
    ref.current.scale.x += (target - ref.current.scale.x) * 0.1;
    ref.current.scale.y += (target - ref.current.scale.y) * 0.1;
    ref.current.scale.z += (target - ref.current.scale.z) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, -1]}
      >
        {/* Menggunakan TorusKnot agar bolong di tengah sehingga teks lebih terbaca */}
        <torusKnotGeometry args={[1.4, 0.25, 128, 32]} />
        <MeshDistortMaterial
          color="#C8860A"
          emissive="#8B5A00"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.9}
          distort={hovered ? 0.3 : 0.1}
          speed={hovered ? 3 : 1}
        />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#FFD080" />
          <pointLight position={[-10, -5, -5]} intensity={0.8} color="#C8860A" />
          <MorphingShape />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
