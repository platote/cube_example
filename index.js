import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp} = metaversefile;

export default () => {
  const app = useApp();
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({color: 0xff0000});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 3;
  app.add(mesh);
  return mesh;
};
