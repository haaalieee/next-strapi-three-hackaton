"use client";

import urlBuilder from "@/lib/urlBuilder";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface GLTFProps {
  url: string;
  isFeatured: boolean;
}

export default function ModelScene({ url, isFeatured }: GLTFProps) {
  const gltf = useLoader(GLTFLoader, urlBuilder(url));

  return gltf ? (
    <Canvas shadows camera={{ position: [4, 3, -10], fov: 35 }} id="canvas-body">
      <color attach="background" args={['#292929']} />
      <Suspense fallback={null}>
        <Stage
          intensity={0.2}
          shadows={{ type: "contact", opacity: 0.8}}
          adjustCamera={isFeatured ? 0.6 : 0.9}
        >
          <primitive object={gltf.scene} rotation={[0,2.75,0]} castShadow receiveShadow/>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI} autoRotate/>
    </Canvas>
  ) : null;
}
