const SegfaultHandler = require('segfault-handler');
const { CameraList, PortInfoList } = require('@typedproject/gphoto2-driver');

SegfaultHandler.registerHandler('crash.log');

const cameraList = new CameraList();
const portList = new PortInfoList().load();

// Auto-detect
cameraList.autodetect();

console.log('Nb camera', cameraList.size);

cameraList.toArray().forEach((cameraInfo, index) => {
  console.log(`[Cam.${index}] model =>`, cameraInfo.model);
  console.log(`[Cam.${index}] port =>`, cameraInfo.port);

  const portInfo = portList.findByPath(cameraInfo.port);

  console.log(`[Cam.${index}] portInfo =>`, portInfo.name);
  console.log(`[Cam.${index}] portInfo =>`, portInfo.path);
});

cameraList.close();
