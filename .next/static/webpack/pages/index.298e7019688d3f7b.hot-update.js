"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = -2.;\n    camera.rotation.x = 0.4; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 0); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"avatar_2025/scene.gltf\", function(gltf) {\n        gltf.scene.traverse(function(child) {\n            if (child.isMesh) {\n                // Convert the material of each mesh to wireframe material\n                const wireframeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n                    color: 0xffffff,\n                    wireframe: true\n                });\n                child.material = wireframeMaterial;\n            }\n        });\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 3;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            gltf.animations.forEach((clip)=>{\n                const action = mixer.clipAction(clip);\n                const slowerDuration = clip.duration * 2; // Double the duration to slow down the animation\n                action.setDuration(slowerDuration); // Set the slower duration for the animation\n                action.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopRepeat; // Set the action to loop\n                action.clampWhenFinished = true; // Ensure animation stops at the end\n                action.play(); // Start playing the animation\n            });\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        // Manually adjust camera orientation here if needed\n        // For example, rotate 180 degrees around the Y axis\n        // camera.rotation.y += Math.PI; \n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLENBQUMsYUFBYSxDQUFDWTtRQUNsQy9FLE1BQU1hLENBQUMsR0FBRyxNQUFPbUUsT0FBTyxHQUFHMUUsT0FBT0MsVUFBVSxHQUFJLElBQUk7UUFDcERQLE1BQU1XLENBQUMsR0FBRyxDQUFFb0UsQ0FBQUEsTUFBTUUsT0FBTyxHQUFHM0UsT0FBT0UsV0FBVyxJQUFJLElBQUk7SUFDMUQ7SUFFQSxTQUFTMEUsS0FBS0MsU0FBUztRQUNuQi9FLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJeUU7SUFDekI7SUFDQTdFLE9BQU82RCxnQkFBZ0IsQ0FBQyxTQUFTLENBQUNZO1FBQzlCRyxLQUFLSCxNQUFNSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUM7SUFDakM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcHAuanM/YzI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qc1wiO1xuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanNcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICd0aHJlZS1zdGRsaWInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCkge1xuICAgIGNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIFxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IC0yLjtcbiAgICBjYW1lcmEucm90YXRpb24ueCA9IDAuNDsgLy8gUm90YXRlIGNhbWVyYSBzbGlnaHRseSB1cHdhcmRzXG5cblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhGNUY1REMsIDApOyAvLyBCZWlnZSBjb2xvciBhcyBkZWZhdWx0XG5cbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuLy8gTG9hZCB0aGUgR0xURiBtb2RlbFxubGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbmNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5sb2FkZXIubG9hZCgnYXZhdGFyXzIwMjUvc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbWF0ZXJpYWwgb2YgZWFjaCBtZXNoIHRvIHdpcmVmcmFtZSBtYXRlcmlhbFxuICAgICAgICAgICAgY29uc3Qgd2lyZWZyYW1lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gd2lyZWZyYW1lTWF0ZXJpYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XG4gICAgc2NlbmUucG9zaXRpb24ueCAtPSAwO1xuICAgIHNjZW5lLnBvc2l0aW9uLnkgLT0gMztcbiAgICBpZiAoZ2x0Zi5hbmltYXRpb25zICYmIGdsdGYuYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIGdsdGYuYW5pbWF0aW9ucy5mb3JFYWNoKChjbGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKGNsaXApO1xuICAgICAgICAgICAgY29uc3Qgc2xvd2VyRHVyYXRpb24gPSBjbGlwLmR1cmF0aW9uICogMjsgLy8gRG91YmxlIHRoZSBkdXJhdGlvbiB0byBzbG93IGRvd24gdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgYWN0aW9uLnNldER1cmF0aW9uKHNsb3dlckR1cmF0aW9uKTsgLy8gU2V0IHRoZSBzbG93ZXIgZHVyYXRpb24gZm9yIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgIGFjdGlvbi5sb29wID0gVEhSRUUuTG9vcFJlcGVhdDsgLy8gU2V0IHRoZSBhY3Rpb24gdG8gbG9vcFxuICAgICAgICAgICAgYWN0aW9uLmNsYW1wV2hlbkZpbmlzaGVkID0gdHJ1ZTsgLy8gRW5zdXJlIGFuaW1hdGlvbiBzdG9wcyBhdCB0aGUgZW5kXG4gICAgICAgICAgICBhY3Rpb24ucGxheSgpOyAvLyBTdGFydCBwbGF5aW5nIHRoZSBhbmltYXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxufSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn0pO1xuXG5cbiAgICAvLyBDcmVhdGUgbGlnaHRzXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpO1xuICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgIC8vIFBvc3QtcHJvY2Vzc2luZ1xuICAgIGNvbnN0IHJlbmRlclNjZW5lID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG5cbiAgICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgMS41LCAwLjQsIDAuODVcbiAgICApO1xuICAgIGJsb29tUGFzcy50aHJlc2hvbGQgPSAwLjE7XG4gICAgYmxvb21QYXNzLnN0cmVuZ3RoID0gMC40O1xuICAgIGJsb29tUGFzcy5yYWRpdXMgPSAwLjE7XG5cbiAgICBjb25zdCBjb21wb3NlciA9IG5ldyBFZmZlY3RDb21wb3NlcihyZW5kZXJlcik7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhyZW5kZXJTY2VuZSk7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhibG9vbVBhc3MpO1xuXG4gICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBjb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgIC8vIERldmljZSBvcmllbnRhdGlvbiBjb250cm9scyBmb3IgbW9iaWxlXG4gICAgbGV0IGRldmljZU9yaWVudGF0aW9uQ29udHJvbHM7XG4gICAgaWYgKC9Nb2JpfEFuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzID0gbmV3IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMoY2FtZXJhKTtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy5jb25uZWN0KCk7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMudXBkYXRlKCk7IC8vIFVwZGF0ZSB0byBhbGlnbiB3aXRoIHRoZSBkZWZhdWx0IGNhbWVyYSBzZXR0aW5nc1xuICAgIH1cblxuLy8gQW5pbWF0aW9uIGxvb3BcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICBpZiAobWl4ZXIpIHtcbiAgICAgICAgbWl4ZXIudXBkYXRlKGRlbHRhKTtcbiAgICB9XG4gICAgaWYgKGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy51cGRhdGUoKTtcbiAgICAgICAgLy8gTWFudWFsbHkgYWRqdXN0IGNhbWVyYSBvcmllbnRhdGlvbiBoZXJlIGlmIG5lZWRlZFxuICAgICAgICAvLyBGb3IgZXhhbXBsZSwgcm90YXRlIDE4MCBkZWdyZWVzIGFyb3VuZCB0aGUgWSBheGlzXG4gICAgICAgIC8vIGNhbWVyYS5yb3RhdGlvbi55ICs9IE1hdGguUEk7IFxuICAgIH1cbiAgICBjb21wb3Nlci5yZW5kZXIoKTtcbn1cblxuICAgIGFuaW1hdGUoKTtcblxuICAgIC8vIE1vdXNlIGFuZCB6b29tIGNvbnRyb2xzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBtb3VzZS54ID0gKGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMTtcbiAgICAgICAgbW91c2UueSA9IC0oZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHpvb20oZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ICs9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHpvb20oZXZlbnQuZGVsdGFZID4gMCA/IDEgOiAtMSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJ5Iiwicm90YXRpb24iLCJ4IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm1peGVyIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwid2lyZWZyYW1lTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwibWF0ZXJpYWwiLCJzY2FsZSIsInNldCIsImFkZCIsImFuaW1hdGlvbnMiLCJsZW5ndGgiLCJBbmltYXRpb25NaXhlciIsImZvckVhY2giLCJjbGlwIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInNsb3dlckR1cmF0aW9uIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImxvb3AiLCJMb29wUmVwZWF0IiwiY2xhbXBXaGVuRmluaXNoZWQiLCJwbGF5IiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjb25zb2xlIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJyZW5kZXJTY2VuZSIsImJsb29tUGFzcyIsInRocmVzaG9sZCIsInN0cmVuZ3RoIiwicmFkaXVzIiwiY29tcG9zZXIiLCJhZGRQYXNzIiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY29ubmVjdCIsInVwZGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWx0YSIsImdldERlbHRhIiwicmVuZGVyIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInpvb20iLCJkaXJlY3Rpb24iLCJkZWx0YVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});