import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useScene} = metaversefile;

export default () => {
  const scene = useScene();
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({color: 0xff0000});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  scene.add(mesh);
  return mesh;
};
