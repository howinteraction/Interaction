import * as THREE from "three";

export default function StageThreePicture5() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/column-long-2d.png",
  );

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}