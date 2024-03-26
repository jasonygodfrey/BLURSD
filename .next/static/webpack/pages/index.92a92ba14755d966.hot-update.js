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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = -2.;\n    camera.rotation.x = 0.4; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 0); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"avatar_2025/scene.gltf\", function(gltf) {\n        gltf.scene.traverse(function(child) {\n            if (child.isMesh) {\n                // Convert the material of each mesh to wireframe material\n                const wireframeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n                    color: 0xffffff,\n                    wireframe: true\n                });\n                child.material = wireframeMaterial;\n            }\n        });\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 3;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        // Manually adjust camera orientation here if needed\n        // For example, rotate 180 degrees around the Y axis\n        // camera.rotation.y += Math.PI; \n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSWlFO0lBQ3pCO0lBQ0FyRSxPQUFPcUQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDWTtRQUM5QkcsS0FBS0gsTUFBTUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ2pDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAndGhyZWUtc3RkbGliJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpIHtcbiAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICBcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAtMi47XG4gICAgY2FtZXJhLnJvdGF0aW9uLnggPSAwLjQ7IC8vIFJvdGF0ZSBjYW1lcmEgc2xpZ2h0bHkgdXB3YXJkc1xuXG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4RjVGNURDLCAwKTsgLy8gQmVpZ2UgY29sb3IgYXMgZGVmYXVsdFxuXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gTG9hZCB0aGUgR0xURiBtb2RlbFxubGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbmNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5sb2FkZXIubG9hZCgnYXZhdGFyXzIwMjUvc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbWF0ZXJpYWwgb2YgZWFjaCBtZXNoIHRvIHdpcmVmcmFtZSBtYXRlcmlhbFxuICAgICAgICAgICAgY29uc3Qgd2lyZWZyYW1lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gd2lyZWZyYW1lTWF0ZXJpYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XG4gICAgc2NlbmUucG9zaXRpb24ueCAtPSAwO1xuICAgIHNjZW5lLnBvc2l0aW9uLnkgLT0gMztcbiAgICBpZiAoZ2x0Zi5hbmltYXRpb25zICYmIGdsdGYuYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zWzBdKTtcbiAgICAgICAgYWN0aW9uLnBsYXkoKTtcbiAgICB9XG59LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuICAgIC8vIENyZWF0ZSBsaWdodHNcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMSwgMSwgMSk7XG4gICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgLy8gUG9zdC1wcm9jZXNzaW5nXG4gICAgY29uc3QgcmVuZGVyU2NlbmUgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhKTtcblxuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAxLjUsIDAuNCwgMC44NVxuICAgICk7XG4gICAgYmxvb21QYXNzLnRocmVzaG9sZCA9IDAuMTtcbiAgICBibG9vbVBhc3Muc3RyZW5ndGggPSAwLjQ7XG4gICAgYmxvb21QYXNzLnJhZGl1cyA9IDAuMTtcblxuICAgIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclNjZW5lKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XG5cbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgLy8gRGV2aWNlIG9yaWVudGF0aW9uIGNvbnRyb2xzIGZvciBtb2JpbGVcbiAgICBsZXQgZGV2aWNlT3JpZW50YXRpb25Db250cm9scztcbiAgICBpZiAoL01vYml8QW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyhjYW1lcmEpO1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmNvbm5lY3QoKTtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy51cGRhdGUoKTsgLy8gVXBkYXRlIHRvIGFsaWduIHdpdGggdGhlIGRlZmF1bHQgY2FtZXJhIHNldHRpbmdzXG4gICAgfVxuXG4vLyBBbmltYXRpb24gbG9vcFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuICAgIGlmIChtaXhlcikge1xuICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgICBpZiAoZGV2aWNlT3JpZW50YXRpb25Db250cm9scykge1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICAvLyBNYW51YWxseSBhZGp1c3QgY2FtZXJhIG9yaWVudGF0aW9uIGhlcmUgaWYgbmVlZGVkXG4gICAgICAgIC8vIEZvciBleGFtcGxlLCByb3RhdGUgMTgwIGRlZ3JlZXMgYXJvdW5kIHRoZSBZIGF4aXNcbiAgICAgICAgLy8gY2FtZXJhLnJvdGF0aW9uLnkgKz0gTWF0aC5QSTsgXG4gICAgfVxuICAgIGNvbXBvc2VyLnJlbmRlcigpO1xufVxuXG4gICAgYW5pbWF0ZSgpO1xuXG4gICAgLy8gTW91c2UgYW5kIHpvb20gY29udHJvbHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vdXNlLnggPSAoZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xuICAgICAgICBtb3VzZS55ID0gLShldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gem9vbShkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogKz0gZGlyZWN0aW9uO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgem9vbShldmVudC5kZWx0YVkgPiAwID8gMSA6IC0xKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkVmZmVjdENvbXBvc2VyIiwiUmVuZGVyUGFzcyIsIlVucmVhbEJsb29tUGFzcyIsIkdMVEZMb2FkZXIiLCJEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJtb3VudFBvaW50IiwiY2xvY2siLCJDbG9jayIsIm1vdXNlIiwiVmVjdG9yMiIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInkiLCJyb3RhdGlvbiIsIngiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwibWl4ZXIiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJ3aXJlZnJhbWVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJ3aXJlZnJhbWUiLCJtYXRlcmlhbCIsInNjYWxlIiwic2V0IiwiYWRkIiwiYW5pbWF0aW9ucyIsImxlbmd0aCIsIkFuaW1hdGlvbk1peGVyIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInBsYXkiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNvbnNvbGUiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInJlbmRlclNjZW5lIiwiYmxvb21QYXNzIiwidGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJjb21wb3NlciIsImFkZFBhc3MiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjb25uZWN0IiwidXBkYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlbHRhIiwiZ2V0RGVsdGEiLCJyZW5kZXIiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiem9vbSIsImRpcmVjdGlvbiIsImRlbHRhWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});