
import * as THREE from "three";

// dodajemy obiekty, światłam, kamerę
let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    75, // fov
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1,
    1000
);

camera.position.z = 5;
scene.add(camera);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);

let material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

let cube = new THREE.Mesh( geometry, material);
scene.add(cube);

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


function render () {
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

    requestAnimationFrame(render);
}

render();



