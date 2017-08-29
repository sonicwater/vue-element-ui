<template>
    <div>
        <canvas id="logo"></canvas>
    </div>
</template>
<script>
    var THREE = require('three');
    export default{
        data() {
            return{
                
            }
        },
        components: {

        },
        mounted() {

            var renderer, camera, scene, light, object;
            var width, height;
            function initRenderer() {
                //width = document.getElementById('logo').clientWidth;
                //height = document.getElementById('logo').clientHeight;
                width = 48;
                height = 48;
                renderer = new THREE.WebGLRenderer({
                    canvas: document.getElementById('logo')
                });
                renderer.setSize(width, height);
                renderer.setClearColor(0x1D8CE0, 1.0);
            }
             
            function initCamera() {
                camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
                camera.position.x = 0;
                camera.position.y = 10;
                camera.position.z = 200;
                camera.up.x = 0;
                camera.up.y = 1;
                camera.up.z = 0;
                camera.lookAt({
                    x: 0,
                    y: 0,
                    z: 0
                });
            }
            function initScene() {
                scene = new THREE.Scene();
            }
            function initObject() {
                var geometry = new THREE.CubeGeometry(28, 28, 28);
                object = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
                scene.add(object);
            }
            function render() {
                requestAnimationFrame(render);
                object.rotation.x += 0.05;
                object.rotation.y += 0.05;
                renderer.render(scene, camera);
            }
            initRenderer();
            initCamera();
            initScene();
            initObject();
            render();
        }
    }
</script>
<style scope>

</style>