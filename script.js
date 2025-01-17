// Three.js for 3D background
const canvas = document.getElementById("3dCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a rotating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(10, 10, 10);
scene.add(ambientLight, pointLight);

camera.position.z = 5;

// Animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// GSAP for smooth animations
gsap.from(".hero-content h1", { y: -50, opacity: 0, duration: 1.5 });
gsap.from(".hero-content p", { y: 50, opacity: 0, delay: 0.5, duration: 1 });
gsap.from(".hero-content a", { scale: 0, opacity: 0, delay: 1, duration: 1 });

// Adjust canvas on resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = [
    'Engineer  ',
    'Analyst   ',
    'Developer  ',
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
    // Loop through each character and add it to the element
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingAnimationElement.textContent += text[i];
        }, i * 200); // Increase the delay to slow down the typing animation
    }

    // Once the animation is complete, reset the text and start over
    setTimeout(() => {
        typingAnimationElement.textContent = '';
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);

