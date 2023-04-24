import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model from '../model/scene.gltf'


const ModelViewer = () => {
  const container = useRef(null);
  useEffect(() => {
    const loader = new GLTFLoader();
  
    loader.load(, (gltf) => {
      const scene = gltf.scene;
  
      const camera = new THREE.PerspectiveCamera(
        75,
        container.current.clientWidth / container.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(
        container.current.clientWidth,
        container.current.clientHeight
      );
      container.current.appendChild(renderer.domElement);
  
      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
    });
  }, []);

  return <div ref={container} />;

}

export default ModelViewer