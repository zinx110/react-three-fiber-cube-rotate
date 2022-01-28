import React, { useRef, useState } from "react";
import { OrbitControls, useTexture, useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

// import normalMap from "./assets/textures/NormalMap.png";

const Sphere = () => {
  const mesh = useRef();

  const [normalMapTexture] = useTexture(["/assets/textures/NormalMap.png"]);

  const { viewport } = useThree();

  useFrame(({ mouse, clock }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    // mesh.current.position.set(x, y, 0);
    mesh.current.rotation.y = clock.getElapsedTime() / 1;
    // mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += x * 0.5;
    mesh.current.position.z = -y * 0.3;
  });

  const Box = (props) => {
    return (
      <mesh {...props} ref={mesh} scale={1} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={normalMapTexture}
          color={"#292929"}
          metalness={0.7}
          roughness={0.4}
        />
      </mesh>
    );
  };
  // const Controls = () => {
  //   return;
  //   // return useFrame(() =>
  //   //   camera.position.lerp(
  //   //     controls.set(mouse.x * 1, mouse.y * 1, camera.position.z),
  //   //     0.02
  //   //   )
  //   // );
  // };

  return (
    <>
      <ambientLight intensity={0.5} />
      <Light position={[2, 3, 4]} intensity={2} />
      <Light position={[-3.6, 1, 0.65]} color={"#ff0000"} intensity={20} />
      <Light position={[2.2, -3, -2]} color={"#00e1ff"} intensity={6.8} />
      <Light position={[2, 3, -2]} color={"#e0efa0"} intensity={6} />
      <Light position={[0, 0, 2]} color={"#e0efa0"} intensity={1} />

      <Box position={[0, 0, 0]} />

      {/* <OrbitControls enableZoom={false} /> */}
      {/* <gridHelper /> */}
    </>
  );
};

export default Sphere;

const Light = (props) => {
  const ref = useRef();
  // useHelper(ref, PointLightHelper, 1);

  return <pointLight ref={ref} args={["#ffffff", 1, 100]} {...props} />;
};

// const Scene = () => (
//   <Canvas
//     camera={{
//       position: [5, 5, 5]
//     }}>
//     <Light />
//     <mesh position={[0, 1, 0]}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial attach="material" />
//     </mesh>
//     <OrbitControls />
//     <gridHelper />
//   </Canvas>
// )

// import * as THREE from 'three'

// // Objects
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// // Materials

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color(0xff0000)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */

// const clock = new THREE.Clock()

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()
