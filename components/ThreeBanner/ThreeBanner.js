import { Suspense, useEffect, useState } from "react";
import styles from "../../styles/ThreeBanner.module.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere/Sphere";

const ThreeBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>
        <h1>MATRIX ERODED</h1>
      </div>
      <Canvas className={styles.canvas}>
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBanner;
