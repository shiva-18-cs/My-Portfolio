import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

/* ── Starfield ── reduced to 800 particles ── */
function Starfield() {
  const ref = useRef();

  const positions = useMemo(() => {
    const pts = new Float32Array(800 * 3);
    for (let i = 0; i < pts.length; i += 3) {
      pts[i]     = (Math.random() - 0.5) * 50;
      pts[i + 1] = (Math.random() - 0.5) * 50;
      pts[i + 2] = (Math.random() - 0.5) * 40 - 10;
    }
    return pts;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

/* ── Simple wireframe shape with slow rotation ── */
function WireShape({ geometry, position, speed = 0.1 }) {
  const ref = useRef();

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed;
      ref.current.rotation.y += delta * speed * 0.7;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial
        wireframe
        color="#6366f1"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* ── Main Background ── */
export default function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Starfield />

        {/* Icosahedron — top-left area */}
        <WireShape
          geometry={<icosahedronGeometry args={[2, 0]} />}
          position={[-5, 3, -12]}
          speed={0.08}
        />

        {/* Torus — center-right */}
        <WireShape
          geometry={<torusGeometry args={[1.8, 0.4, 12, 32]} />}
          position={[5, -2, -14]}
          speed={0.06}
        />

        {/* Octahedron — bottom-left */}
        <WireShape
          geometry={<octahedronGeometry args={[1.6, 0]} />}
          position={[-3, -5, -10]}
          speed={0.1}
        />
      </Canvas>
    </div>
  );
}
