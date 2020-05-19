window.onload = function(){
    
    var planet_container = this.document.querySelector('.render');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, 550 / 550, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({alpha : true, antialias:true});
    var control = new THREE.OrbitControls(camera, renderer.domElement);  
    var loader = new THREE.ObjectLoader();
    loader.load ('/3d_models/scene.json', function(object){
      scene.add(object);
      
    });
    
    
    renderer.setSize( 550, 550 );
    planet_container.appendChild( renderer.domElement );
    camera.position.z = 10;
    control.autoRotate = true;
    control.enableZoom = false;
    control.enablePan = false;
    control.rotateSpeed = 0.2;
    control.update();
        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
            
            control.update();
        }
        animate();

        
  var rover_container = this.document.querySelector('.rover-render');
  var scene_rover = new THREE.Scene();
  var camera_rover = new THREE.PerspectiveCamera( 75, 700 / 700, 0.1, 1000 );
  var renderer_rover = new THREE.WebGLRenderer({alpha : true, antialias:true});
  var control_rover = new THREE.OrbitControls(camera_rover, renderer_rover.domElement);  
  var loader_rover = new THREE.ObjectLoader();
  loader_rover.load ('/3d_models/scene_rover.json', function(obj){
    scene_rover.add(obj);
    
  });
  renderer_rover.setSize( 700, 700 );
    rover_container.appendChild( renderer_rover.domElement );
    camera_rover.position.z = 20;
    control_rover.autoRotate = true;
    control_rover.enableZoom = false;
    control_rover.enablePan = false;
    control_rover.rotateSpeed = 0.2;
    control_rover.update();
        function animateRover() {
            requestAnimationFrame( animateRover );
            renderer_rover.render( scene_rover, camera_rover );
            
            control_rover.update();
        }
        animateRover();

  

}