import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { Box } from "@mui/material";

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
  const ref = useRef<Mesh>(null);

  const { scene } = useGLTF(model);

  var velocity = acceleration ? 0 : maxSpeed;

  useFrame((state, delta) => {
    velocity += acceleration - friction;
    velocity > maxSpeed && (velocity = maxSpeed);
    velocity <= 0 && (velocity = 0);
    if (ref.current?.rotation) ref.current.rotation.y += velocity;
  });

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
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
        userSelect: "none",
        cursor: "grab",
      }}
      onMouseEnter={(e) => {
        setAcceleration(0);
      }}
      onMouseLeave={(e) => {
        setAcceleration(0.0002);
      }}
    >
      <Canvas>
        <ambientLight color="#404040" />
        <PerspectiveCamera makeDefault position={[0, 5, 20]}>
          <pointLight decay={0} intensity={0.7} />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Scene model={model} acceleration={acceleration} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default ToolModel;
