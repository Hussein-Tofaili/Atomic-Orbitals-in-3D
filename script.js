// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 6;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight/1.1 );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera, renderer.domElement );
// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 0.1,0.1,0.1 );


// Add cube to Scene

var inc=0.1,c=0,ab=1;
var r=0,th=0,ph=0;

scene.rotation.set(3*Math.PI/2,0,-Math.PI/2);
// Render Loop
function fill() {
  
	while(r<3){
	while(ph<=Math.PI*2){
	while(th<=Math.PI){
		
		c=Math.floor(Math.abs(r*r/3*Math.exp(-r/3)*(3*Math.cos(th)*Math.cos(th)-1))*100);
		if(c>70){ 
		var material = new THREE.MeshBasicMaterial( { color: "rgb("+c*2+", "+c*2+","+c*2+")" } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(r * Math.sin(th) * Math.cos(ph),r * Math.sin(th) * Math.sin(ph),r * Math.cos(th));
		scene.add( cube );
		}
	th+=inc;
	}
	th=0;ph+=inc;
	}
	th=0;ph=0;r+=inc;
	}
}
fill();

function render() {
  requestAnimationFrame( render );
  // Render the scene
	renderer.render(scene, camera);
}
render();
/*
// Rotation (XYZ) in radians. 
cube.rotation.x
cube.rotation.y
cube.rotation.z
// Position (XYZ)
cube.position.x
cube.position.y
cube.position.z
// Scale (XYZ) 
cube.scale.x
cube.scale.y
cube.scale.z
*/