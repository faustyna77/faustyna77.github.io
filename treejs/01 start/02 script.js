
import * as THREE from "three";
import { GeometryHelper } from "game/GeometryHelper.js";

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

const geometryHelper = new GeometryHelper();

let cube1 = geometryHelper.createSimpleCube({
    color: 0xff0000,
    wireframe: true,
    numSegments: 5
});
scene.add(cube1);


let sphere1 = geometryHelper.createSimpleSphere({
    wireframe: true
});
sphere1.position.x += 2.5;
scene.add(sphere1);

let torus1 = geometryHelper.createSimpleTorus({
    wireframe: true
});
torus1.position.x -= 2.5;
scene.add(torus1);


let cylinder1 = geometryHelper.createSimpleCylinder({
    wireframe: true
});
cylinder1.position.x = 1;
cylinder1.position.y = 2;
scene.add(cylinder1);


const plane1 = geometryHelper.createSimplePlane({
    side: THREE.FrontSide
});
plane1.position.x = -1;
plane1.position.y = 2;
scene.add(plane1);

const cone1 = geometryHelper.createSimpleCone({
    wireframe: true
});
cone1.position.y = -2;
scene.add(cone1);


const cubeWithRandomVertexColors = geometryHelper.createCubeWithRandomVertexColors();
cubeWithRandomVertexColors.position.x = -2;
cubeWithRandomVertexColors.position.y = -2.3;
scene.add(cubeWithRandomVertexColors);



let text3d = null;
geometryHelper.create3dText({
    str: "Hello Three.js!",
    callbackReady: function( readyText3d ) {
        text3d = readyText3d;
        scene.add(text3d);
        text3d.position.x -= 8;
        text3d.position.y += 3;
        text3d.position.z -= 6;
    }
});


const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight( color, intensity );
light.position.set(0, 10, 10);
light.target.position.set(0,0,0);
scene.add(light);
scene.add(light.target); // dzięki temu można zmieniać pozycję target





window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


function render () {
    cube1.rotation.y += 0.01;
    sphere1.rotation.x += 0.01;
    torus1.rotation.y -= 0.01;

    cylinder1.rotation.z += 0.01;
    cylinder1.rotation.y += 0.01; 

    plane1.rotation.z += 0.01;
    plane1.rotation.y += 0.01; 

    cone1.rotation.y -= 0.01;

    if (text3d) text3d.rotation.x += 0.01;

    cubeWithRandomVertexColors.rotation.y -= 0.01;
    

    renderer.render( scene, camera );

    requestAnimationFrame(render);
}

render();


