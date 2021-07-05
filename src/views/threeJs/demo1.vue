<template>
  <div id="container"></div>
</template>

<script>
import * as Three from "three";
export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    };
  },
  methods: {
    init() {
      let container = document.getElementById("container");

      this.scene = new Three.Scene(); //创建场景

      this.camera = new Three.PerspectiveCamera(
        70, //视野角度
        container.clientWidth / container.clientHeight, //长宽比
        0.01, //近截面
        10 //远截面
      ); //创建摄像机 摄像机有很多种采用的是透视相机
      this.camera.position.z = 2; //scene.add()的时候，物体将会被添加到(0,0,0)坐标.会使摄像机和立方体彼此在一起，将摄像机稍微往外移动一点点(值为1这个时候视野最近，东西看着最大)

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      let geometry = new Three.BoxGeometry(1, 1, 1); //创建box几何图形
      let material = new Three.MeshNormalMaterial(); //创建网格材质
      this.mesh = new Three.Mesh(geometry, material); //创建网格  网格包含这个几何图形和材质
      this.scene.add(this.mesh); //将网格添加到场景中

      container.appendChild(this.renderer.domElement);
    },
    animate() {
      //渲染场景 动画循环 这里可以用setInterval循环渲染，但是requestAnimationFrame有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，不会浪费内存。
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
}
</style>
