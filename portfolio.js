// 3d Object
import * as THREE from "three"; // Import Three.js
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // Import OrbitControls
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"; // Import GLTFLoader

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("three-container");

  if (!container) {
    console.error("The #three-container element is not available in the DOM.");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  if (!renderer.capabilities.isWebGL2) {
    console.warn(
      "WebGL2 is not available. Some features might not work as expected."
    );
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#dddddd"); // Set the background

  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight
  );
  camera.position.set(0, -25, 25);

  const controls = new OrbitControls(camera, renderer.domElement);
  // Disable zooming with scroll
  controls.enableZoom = false;
  controls.enabled = false;

  const light = new THREE.DirectionalLight("white", 10);
  light.position.set(0, 0, 1).normalize();
  scene.add(light);

  const ambientLight = new THREE.AmbientLight("white", 100);
  scene.add(ambientLight);

  const loader = new GLTFLoader();
  const modelUrls = [
    "3datom/sphere.glb",
    "3datom/torus1.glb",
    "3datom/torus2.glb",
    "3datom/torus3.glb",
    "3datom/torus4.glb",
    "3datom/torus5.glb",
    "3datom/torus6.glb",
    "3datom/torus7.glb",
  ];

  const models = [];

  modelUrls.forEach((url, index) => {
    loader.load(
      url,
      function (gltf) {
        const model = gltf.scene;

        // Create materials for the sphere and other parts
        const sphereMaterial = new THREE.MeshStandardMaterial({
          color: "#FFE736", // Color for the sphere
          roughness: 0.8,
          metalness: 1,
          //emissive: "#FFE736", // Emissive color for glow effect
        });

        const otherMaterial = new THREE.MeshStandardMaterial({
          color: "#404040", // Color for other parts
          roughness: 0.2,
          metalness: 1,
        });

        model.traverse((child) => {
          if (child.isMesh) {
            // Apply different materials based on the object's name or type
            if (child.name === "Sphere") {
              // Replace "Sphere" with the actual name of the sphere object in your model
              child.material = sphereMaterial;
            } else {
              child.material = otherMaterial;
            }
          }
        });

        scene.add(model);
        models.push(model);
      },
      undefined,
      function (error) {
        console.error("Error loading model:", error);
      }
    );
  });

  function animate() {
    models.forEach((model, index) => {
      model.rotation.x += 0.001 * (index + 1);
      model.rotation.y += 0.001 * (index + 1);
    });

    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  window.addEventListener("resize", () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });
});
