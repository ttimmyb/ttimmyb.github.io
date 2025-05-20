//npm install --save three
//npm install --save-dev vite
//npx vite

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";

// Check for WebGL2 support
if (!WebGL.isWebGL2Available()) {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa); // Set a gray background

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5); // Set a more dynamic camera position

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Add light (needed for GLTF models)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Optional ambient light for softer lighting
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

// Create a basic cube (for testing purposes)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Load GLTF model
const loader = new GLTFLoader();

let sphere, torus1, torus2, torus3, torus4, torus5, torus6, torus7; // References to objects I want to animate

// loading sphere into scene
loader.load(
  "sphere.glb",
  function (gltf) {
    const model = gltf.scene;
    sphere = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus1.glb",
  function (gltf) {
    const model = gltf.scene;
    torus1 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus2.glb",
  function (gltf) {
    const model = gltf.scene;
    torus2 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus3.glb",
  function (gltf) {
    const model = gltf.scene;
    torus3 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus4.glb",
  function (gltf) {
    const model = gltf.scene;
    torus4 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus5.glb",
  function (gltf) {
    const model = gltf.scene;
    torus5 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus6.glb",
  function (gltf) {
    const model = gltf.scene;
    torus6 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//loading torus 1 into scene
loader.load(
  "torus7.glb",
  function (gltf) {
    const model = gltf.scene;
    torus7 = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
    model.position.set(0, 0, 0); // Ensure it's at the origin

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Animation loop
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  if (sphere) {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;
  }

  if (torus1) {
    torus1.rotation.x += 0.02;
    torus1.rotation.y += 0.02;
    torus1.rotation.z += 0.02;
  }

  if (torus2) {
    torus2.rotation.x += -0.02;
    torus2.rotation.y += -0.02;
    torus2.rotation.z += -0.02;
  }

  if (torus3) {
    torus3.rotation.x += -0.02;
    torus3.rotation.y += 0.02;
    torus3.rotation.z += 0.02;
  }

  if (torus4) {
    torus4.rotation.x += 0.02;
    torus4.rotation.y += -0.02;
    torus4.rotation.z += 0.02;
  }

  if (torus5) {
    torus5.rotation.x += 0.02;
    torus5.rotation.y += 0.02;
    torus5.rotation.z += -0.02;
  }

  if (torus6) {
    torus6.rotation.x += -0.02;
    torus6.rotation.y += 0.02;
    torus6.rotation.z += -0.02;
  }

  if (torus7) {
    torus7.rotation.x += 0.02;
    torus7.rotation.y += 0.02;
    torus7.rotation.z += 0.02;
  }

  controls.update();
  renderer.render(scene, camera);
}

// Start the animation loop after everything is initialized
renderer.setAnimationLoop(animate);
