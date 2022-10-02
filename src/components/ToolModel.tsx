import { Suspense, useRef, useState } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box } from '@mui/material';

type SceneProps = {
  model: string;
  acceleration?: number;
  maxSpeed?: number;
  friction?: number;
};

const Scene = ({
  model,
  acceleration = 0.0002,
  maxSpeed = 0.005,
  friction = 0.0001,
}: SceneProps) => {
  const ref = useRef<MeshProps>(null);

  const { scene } = useGLTF(model);

  var velocity = acceleration ? 0 : maxSpeed;

  useFrame((state, delta) => {
    velocity += acceleration - friction;
    velocity > maxSpeed && (velocity = maxSpeed);
    velocity <= 0 && (velocity = 0);
    if (ref.current) ref.current.rotation.y += velocity;
  });

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
      <pointLight
        position={[10, 5, 20]}
        intensity={0.5}
        distance={100}
        decay={2}
      />
      <ambientLight color="#404040" />
      <mesh ref={ref}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

type ToolModelProps = {
  model: string;
};

const ToolModel = ({ model }: ToolModelProps) => {
  const [acceleration, setAcceleration] = useState(0.0002);
  return (
    <Box
      component="div"
      style={{
        height: 200,
        userSelect: 'none',
        cursor: 'grab',
      }}
      onMouseEnter={(e) => {
        setAcceleration(0);
      }}
      onMouseLeave={(e) => {
        setAcceleration(0.0002);
      }}
    >
      <Canvas camera={{ position: [0, 5, 12] }}>
        <Suspense fallback={null}>
          <Scene model={model} acceleration={acceleration} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default ToolModel;
