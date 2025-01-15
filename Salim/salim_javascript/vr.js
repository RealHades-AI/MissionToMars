// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load('/Salim/salim_html/images/space.jpg'); // Space background

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a Holodeck Grid
const createHolodeck = () => {
  const gridColor = 0xffa500; // Orange-yellow color
  const size = 20;
  const divisions = 40;

  // Floor grid
  const floorGrid = new THREE.GridHelper(size, divisions, gridColor, gridColor);
  floorGrid.material.opacity = 1.5;
  floorGrid.material.transparent = true;
  scene.add(floorGrid);

  // Walls
  const wallGrid1 = floorGrid.clone();
  wallGrid1.rotation.x = Math.PI / 2;
  wallGrid1.position.z = -size / 2;
  scene.add(wallGrid1);

  const wallGrid2 = floorGrid.clone();
  wallGrid2.rotation.y = Math.PI / 2;
  wallGrid2.position.x = -size / 2;
  scene.add(wallGrid2);

  const wallGrid3 = floorGrid.clone();
  wallGrid3.rotation.y = -Math.PI / 2;
  wallGrid3.position.x = size / 2;
  scene.add(wallGrid3);

  const wallGrid4 = floorGrid.clone();
  wallGrid4.rotation.x = -Math.PI / 2;
  wallGrid4.position.z = size / 2;
  scene.add(wallGrid4);
};

createHolodeck();

const createDoorway = () => {
    const doorGeometry = new THREE.BoxGeometry(4, 6, 0.5);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0xfc9312 }); // Change color here
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 3, -10);
  
    const doorFrameGeometry = new THREE.BoxGeometry(4.2, 6.2, 0.3);
    const doorFrameMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
    const doorFrame = new THREE.Mesh(doorFrameGeometry, doorFrameMaterial);
    doorFrame.position.set(0, 3, -10.1);
  
    scene.add(door);
    scene.add(doorFrame);
};

createDoorway();

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040); // soft light
scene.add(ambientLight);

// Camera Position
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
