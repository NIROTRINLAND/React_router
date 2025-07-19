import { Canvas } from '@react-three/fiber';

function Cube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0ea5e9" />
    </mesh>
  );
}

export default function Cube3D() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  );
}
