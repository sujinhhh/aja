import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function App() {
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer();
  renderer.render(scene);
  return (
    <Canvas>
      <h2>hahah</h2>
    </Canvas>
  );
}
