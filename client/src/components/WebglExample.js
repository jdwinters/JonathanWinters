import React, { Component } from 'react';
import * as THREE from "three";
const OrbitControls = require("three-orbit-controls")(THREE);

//Basically an About Me Page
class WebglExample extends Component {
	constructor(props) {
		super(props);
		this.animate = this.animate.bind(this);
		this.addCube = this.addCube.bind(this);
		this.initializeCamera = this.initializeCamera.bind(this);
		this.initializeOrbits = this.initializeOrbits.bind(this);
	}
	componentDidMount() {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color( 0xf7f4e3 );
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.renderer.setSize(width, height);
		this.mount.appendChild(this.renderer.domElement);
		this.initializeOrbits();
		this.initializeCamera();



		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xff00000, visible: true } );
		this.cube = new THREE.Mesh( geometry, material );
		this.cube.position.x = -2;
		this.scene.add( this.cube );
		this.addExperimentalCube();

		const light1 = new THREE.PointLight(0xfffffff, 1, 500);
		light1.position.set(50, 50, 25);
		this.scene.add(light1);

		const light2 = new THREE.PointLight(0xfffffff, 1, 500);
		light2.position.set(-50, -50, -25);
		this.scene.add(light2);

		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();

		this.animate();

		window.addEventListener('resize', () => {
	       this.renderer.setSize(window.innerWidth, window.innerHeight);
		   this.camera.aspect = window.innerWidth/ window.innerHeight;

		   this.camera.updateProjectionMatrix();
  		});
		window.addEventListener('contextmenu', (event) => {
			event.preventDefault();

			this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			this.mouse.y = - (event.clientY / window.innerHeight ) * 2 + 1;

			this.raycaster.setFromCamera(this.mouse, this.camera);

			var intersects = this.raycaster.intersectObjects(this.scene.children, true);
			for(var i = 0; i < intersects.length; i++){
				if(intersects[i].object.material.color !== undefined){
					intersects[i].object.material.color.set(Math.random() * 0xffffffff);
				}
			}
			if(intersects.length > 0 && intersects[0].object.material.color === undefined){
				//console.log(intersects[i].object.material);
				var index = Math.floor( intersects[0].faceIndex / 2 );
				switch (index) {
					case 0: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
					case 1: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
					case 2: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
					case 3: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
					case 4: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
					case 5: intersects[0].object.material[index].color = new THREE.Color(Math.random() * 0xffffffff); break;
				}
			}
		});
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.frameId);
		this.mount.removeChild(this.renderer.domElement);
	}
	initializeOrbits() {
		this.controls.rotateSpeed = 10.0;
		this.controls.zoomSpeed = 1.2;
		this.controls.panSpeed = 0.8;
	}
	initializeCamera() {
		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.camera.position.z = 4;
	}
	addCube(cube) {
		this.scene.add(cube);
	}
	vertexShader() {
		return `
			varying vec3 vUv;

			void main() {
				vUv = position;

				vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
				gl_Position = projectionMatrix * modelViewPosition;
			}
		`;
	}
	fragmentShader(){
		return `
			uniform vec3 colorA;
			uniform vec3 colorB;
			varying vec3 vUv;

			//MainImage
			void main() {
				vec3 mixedColor = mix(colorA, colorB, vUv.z);

				gl_FragColor = vec4(mixedColor, 1.0);
			}
		`;
	}
	addExperimentalCube(){
		let expGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
		let expMaterials = [
			new THREE.MeshLambertMaterial({color:"red"}),
			new THREE.MeshLambertMaterial({color:"green"}),
		    new THREE.MeshLambertMaterial({color:"blue"}),
		    new THREE.MeshLambertMaterial({color:"cyan"}),
		    new THREE.MeshLambertMaterial({color:"magenta"}),
		    new THREE.MeshLambertMaterial({color:"yellow"})
		];

		this.mesh = new THREE.Mesh(expGeometry, new THREE.MeshFaceMaterial( expMaterials ));
		this.mesh.position.x = 2;

		this.scene.add(this.mesh);


	}
	animate(cube, mesh) {
		this.frameId = window.requestAnimationFrame(this.animate);
		this.renderer.render(this.scene, this.camera);

		this.cube.rotation.x += 0.05;
		this.cube.rotation.y += 0.025;

		this.mesh.rotation.x += 0.025;
		this.mesh.rotation.y += 0.05;
	}
	render() {
		return (
			<div>
				<div
					id="boardCanvas"
					style={{ width: window.innerWidth, height: window.innerHeight }}
					ref={mount => {
					this.mount = mount;
					}}
				/>
			</div>
		);
	}
};

export default WebglExample;
