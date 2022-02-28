import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp, useScene} = metaversefile;

export default () => {
  const scene = useScene();
  const app = useApp();
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({color: 0xff0000});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(2,10,0);
  scene.add(mesh);
  app.updateMatrixWorld();
  return mesh;
};
