import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DeviceOrientationControls } from 'three-stdlib';

export function initializeThreeJS(mountPoint) {
    const clock = new THREE.Clock();
    let mouse = new THREE.Vector2();

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.z = 1;
    camera.position.y = 0.;
    camera.rotation.x = 0.0; // Rotate camera slightly upwards


    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xF5F5DC, 0); // Beige color as default

    mountPoint.appendChild(renderer.domElement);
    // Load the GLTF model
    // Define mixers at the top level
let mixer, mixer2;
    const loader = new GLTFLoader();
    loader.load('avatar_2025/scene.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                // Convert the material of each mesh to wireframe material
                const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
                child.material = wireframeMaterial;
            }
        });
        gltf.scene.scale.set(1, 1, 1);
        scene.add(gltf.scene);
        scene.position.x -= 0;
        scene.position.y -= 1.5;
        if (gltf.animations && gltf.animations.length) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                const slowerDuration = clip.duration * 10; // Double the duration to slow down the animation
                action.setDuration(slowerDuration); // Set the slower duration for the animation
                action.loop = THREE.LoopRepeat; // Set the action to loop
                action.clampWhenFinished = true; // Ensure animation stops at the end
                action.play(); // Start playing the animation
            });
// Load the second GLTF model
const loader2 = new GLTFLoader();
loader2.load('avatar_2025/bucky4.gltf', function (gltf) {
    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            // Convert the material of each mesh to wireframe material
            const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            child.material = wireframeMaterial;
        }
    });
    gltf.scene.scale.set(3, 3, 3);
    scene.add(gltf.scene);

    gltf.scene.position.y += 1.7;

    if (gltf.animations && gltf.animations.length) {
        mixer2 = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
            const action = mixer2.clipAction(clip);
            const slowerDuration = clip.duration * 10; // Double the duration to slow down the animation
            action.setDuration(slowerDuration); // Set the slower duration for the animation
            action.loop = THREE.LoopRepeat; // Set the action to loop
            action.clampWhenFinished = true; // Ensure animation stops at the end
            action.play(); // Start playing the animation
        });
    }
}, undefined, function (error) {
    console.error(error);
});

        }
    }, undefined, function (error) {
        console.error(error);
    });


    // Create lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Post-processing
    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, 0.4, 0.85
    );
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Handle window resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Device orientation controls for mobile
    let deviceOrientationControls;
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        deviceOrientationControls = new DeviceOrientationControls(camera);
        deviceOrientationControls.connect();
        deviceOrientationControls.update(); // Update to align with the default camera settings
    }

    // Animation loop
// Animation loop
function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }
    if (mixer2) {
        mixer2.update(delta);
    }
    if (deviceOrientationControls) {
        deviceOrientationControls.update();
    }
    composer.render();
}

    animate();
    let parallaxIntensity = 0.25;
    // Mouse and zoom controls
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Add parallax effect
        camera.position.x = mouse.x * parallaxIntensity;
        camera.position.y = -mouse.y * parallaxIntensity; // Invert the y-axis
    });

    function zoom(direction) {
        camera.position.z += direction;
    }
    window.addEventListener('wheel', (event) => {
        zoom(event.deltaY > 0 ? 1 : -1);
    });


}
