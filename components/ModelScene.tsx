"use client";

import urlBuilder from "@/lib/urlBuilder";
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import LoaderDiv from "./LoaderDiv";

interface GLTFProps {
  url: string;
  isFeatured: boolean;
}

export default function ModelScene({ url, isFeatured }: GLTFProps) {
  const [gltf, setGltf] = useState<GLTF | null>(null);
  const defaultUrl = "./assets/keyboardver9.glb"; // Default GLTF path

  useEffect(() => {
    let currentUrl = urlBuilder(url); // Fetched or provided GLTF URL

    // If the fetched URL is unavailable, use the default URL as fallback
    if (!currentUrl) {
      currentUrl = defaultUrl;
    }

    // Load the GLTF asynchronously
    const loader = new GLTFLoader();

    loader.load(currentUrl, setGltf, undefined, (error) => {
      console.error("Error loading GLTF:", error);
      setGltf(null); // Set gltf to null in case of error
    });
  }, [url]);

  return gltf ? (
    <>
      <Canvas
        shadows
        camera={{ position: [4, 3, -10], fov: 35 }}
        id="canvas-body"
      >
        <color attach="background" args={["#292929"]} />
        <Suspense fallback={null}>
          <Stage
            intensity={0.2}
            shadows={{ type: "contact", opacity: 0.8 }}
            adjustCamera={isFeatured ? 0.6 : 0.9}
          >
            <primitive
              object={gltf.scene}
              rotation={[0, 2.75, 0]}
              castShadow
              receiveShadow
            />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          autoRotate
        />
      </Canvas>
      <Loader />
    </>
  ) : (
    <LoaderDiv />
  );
}
