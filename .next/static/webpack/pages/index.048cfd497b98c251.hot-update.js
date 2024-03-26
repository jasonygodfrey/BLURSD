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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = -2.;\n    camera.rotation.x = 0.4; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 0); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"avatar_2025/scene.gltf\", function(gltf) {\n        gltf.scene.traverse(function(child) {\n            if (child.isMesh) {\n                // Convert the material of each mesh to wireframe material\n                const wireframeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n                    color: 0xffffff,\n                    wireframe: true\n                });\n                child.material = wireframeMaterial;\n            }\n        });\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 3;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            gltf.animations.forEach((clip)=>{\n                const action = mixer.clipAction(clip);\n                action.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopOnce;\n                action.clampWhenFinished = true;\n                action.play();\n                action.setLoop(three__WEBPACK_IMPORTED_MODULE_0__.LoopOnce, 1); // Play each animation once\n                action.clampWhenFinished = true; // Ensure animation stops at the end\n                action.paused = true; // Start with animations paused\n            });\n            mixer.addEventListener(\"finished\", function(e) {\n                const nextActionIndex = e.action._clip.tracks.length % gltf.animations.length; // Cycle to the next animation\n                mixer.uncacheAction(e.action); // Remove the action from cache to prevent memory leak\n                const nextAction = mixer.clipAction(gltf.animations[nextActionIndex]);\n                nextAction.play();\n            });\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        // Manually adjust camera orientation here if needed\n        // For example, rotate 180 degrees around the Y axis\n        // camera.rotation.y += Math.PI; \n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sSUFBSSxtREFBbUQ7SUFDM0Y7SUFFSixpQkFBaUI7SUFDakIsU0FBU0M7UUFDTEMsc0JBQXNCRDtRQUN0QixNQUFNRSxRQUFRbkYsTUFBTW9GLFFBQVE7UUFDNUIsSUFBSTdELE9BQU87WUFDUEEsTUFBTXlELE1BQU0sQ0FBQ0c7UUFDakI7UUFDQSxJQUFJUiwyQkFBMkI7WUFDM0JBLDBCQUEwQkssTUFBTTtRQUNoQyxvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELGlDQUFpQztRQUNyQztRQUNBVixTQUFTZSxNQUFNO0lBQ25CO0lBRUlKO0lBRUEsMEJBQTBCO0lBQzFCekUsT0FBTzJDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQ21DO1FBQ2xDcEYsTUFBTWEsQ0FBQyxHQUFHLE1BQU93RSxPQUFPLEdBQUcvRSxPQUFPQyxVQUFVLEdBQUksSUFBSTtRQUNwRFAsTUFBTVcsQ0FBQyxHQUFHLENBQUV5RSxDQUFBQSxNQUFNRSxPQUFPLEdBQUdoRixPQUFPRSxXQUFXLElBQUksSUFBSTtJQUMxRDtJQUVBLFNBQVMrRSxLQUFLQyxTQUFTO1FBQ25CcEYsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUk4RTtJQUN6QjtJQUNBbEYsT0FBTzJDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ21DO1FBQzlCRyxLQUFLSCxNQUFNSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUM7SUFDakM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcHAuanM/YzI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qc1wiO1xuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanNcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICd0aHJlZS1zdGRsaWInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCkge1xuICAgIGNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIFxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IC0yLjtcbiAgICBjYW1lcmEucm90YXRpb24ueCA9IDAuNDsgLy8gUm90YXRlIGNhbWVyYSBzbGlnaHRseSB1cHdhcmRzXG5cblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhGNUY1REMsIDApOyAvLyBCZWlnZSBjb2xvciBhcyBkZWZhdWx0XG5cbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuLy8gTG9hZCB0aGUgR0xURiBtb2RlbFxubGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbmNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5sb2FkZXIubG9hZCgnYXZhdGFyXzIwMjUvc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbWF0ZXJpYWwgb2YgZWFjaCBtZXNoIHRvIHdpcmVmcmFtZSBtYXRlcmlhbFxuICAgICAgICAgICAgY29uc3Qgd2lyZWZyYW1lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsID0gd2lyZWZyYW1lTWF0ZXJpYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XG4gICAgc2NlbmUucG9zaXRpb24ueCAtPSAwO1xuICAgIHNjZW5lLnBvc2l0aW9uLnkgLT0gMztcbiAgICBpZiAoZ2x0Zi5hbmltYXRpb25zICYmIGdsdGYuYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIGdsdGYuYW5pbWF0aW9ucy5mb3JFYWNoKChjbGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKGNsaXApO1xuICAgICAgICAgICAgYWN0aW9uLmxvb3AgPSBUSFJFRS5Mb29wT25jZTtcbiAgICAgICAgICAgIGFjdGlvbi5jbGFtcFdoZW5GaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpb24ucGxheSgpO1xuICAgICAgICAgICAgYWN0aW9uLnNldExvb3AoVEhSRUUuTG9vcE9uY2UsIDEpOyAvLyBQbGF5IGVhY2ggYW5pbWF0aW9uIG9uY2VcbiAgICAgICAgICAgIGFjdGlvbi5jbGFtcFdoZW5GaW5pc2hlZCA9IHRydWU7IC8vIEVuc3VyZSBhbmltYXRpb24gc3RvcHMgYXQgdGhlIGVuZFxuICAgICAgICAgICAgYWN0aW9uLnBhdXNlZCA9IHRydWU7IC8vIFN0YXJ0IHdpdGggYW5pbWF0aW9ucyBwYXVzZWRcbiAgICAgICAgfSk7XG4gICAgICAgIG1peGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbmlzaGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRBY3Rpb25JbmRleCA9IChlLmFjdGlvbi5fY2xpcC50cmFja3MubGVuZ3RoKSAlIGdsdGYuYW5pbWF0aW9ucy5sZW5ndGg7IC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGFuaW1hdGlvblxuICAgICAgICAgICAgbWl4ZXIudW5jYWNoZUFjdGlvbihlLmFjdGlvbik7IC8vIFJlbW92ZSB0aGUgYWN0aW9uIGZyb20gY2FjaGUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgICAgICAgICAgY29uc3QgbmV4dEFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zW25leHRBY3Rpb25JbmRleF0pO1xuICAgICAgICAgICAgbmV4dEFjdGlvbi5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG59KTtcblxuXG4gICAgLy8gQ3JlYXRlIGxpZ2h0c1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgIDEuNSwgMC40LCAwLjg1XG4gICAgKTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBEZXZpY2Ugb3JpZW50YXRpb24gY29udHJvbHMgZm9yIG1vYmlsZVxuICAgIGxldCBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzO1xuICAgIGlmICgvTW9iaXxBbmRyb2lkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKGNhbWVyYSk7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuY29ubmVjdCgpO1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpOyAvLyBVcGRhdGUgdG8gYWxpZ24gd2l0aCB0aGUgZGVmYXVsdCBjYW1lcmEgc2V0dGluZ3NcbiAgICB9XG5cbi8vIEFuaW1hdGlvbiBsb29wXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG4gICAgaWYgKG1peGVyKSB7XG4gICAgICAgIG1peGVyLnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSB7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgIC8vIE1hbnVhbGx5IGFkanVzdCBjYW1lcmEgb3JpZW50YXRpb24gaGVyZSBpZiBuZWVkZWRcbiAgICAgICAgLy8gRm9yIGV4YW1wbGUsIHJvdGF0ZSAxODAgZGVncmVlcyBhcm91bmQgdGhlIFkgYXhpc1xuICAgICAgICAvLyBjYW1lcmEucm90YXRpb24ueSArPSBNYXRoLlBJOyBcbiAgICB9XG4gICAgY29tcG9zZXIucmVuZGVyKCk7XG59XG5cbiAgICBhbmltYXRlKCk7XG5cbiAgICAvLyBNb3VzZSBhbmQgem9vbSBjb250cm9sc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiR0xURkxvYWRlciIsIkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJpbml0aWFsaXplVGhyZWVKUyIsIm1vdW50UG9pbnQiLCJjbG9jayIsIkNsb2NrIiwibW91c2UiLCJWZWN0b3IyIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwieSIsInJvdGF0aW9uIiwieCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJtaXhlciIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwidHJhdmVyc2UiLCJjaGlsZCIsImlzTWVzaCIsIndpcmVmcmFtZU1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIndpcmVmcmFtZSIsIm1hdGVyaWFsIiwic2NhbGUiLCJzZXQiLCJhZGQiLCJhbmltYXRpb25zIiwibGVuZ3RoIiwiQW5pbWF0aW9uTWl4ZXIiLCJmb3JFYWNoIiwiY2xpcCIsImFjdGlvbiIsImNsaXBBY3Rpb24iLCJsb29wIiwiTG9vcE9uY2UiLCJjbGFtcFdoZW5GaW5pc2hlZCIsInBsYXkiLCJzZXRMb29wIiwicGF1c2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJuZXh0QWN0aW9uSW5kZXgiLCJfY2xpcCIsInRyYWNrcyIsInVuY2FjaGVBY3Rpb24iLCJuZXh0QWN0aW9uIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjb25zb2xlIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJyZW5kZXJTY2VuZSIsImJsb29tUGFzcyIsInRocmVzaG9sZCIsInN0cmVuZ3RoIiwicmFkaXVzIiwiY29tcG9zZXIiLCJhZGRQYXNzIiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjb25uZWN0IiwidXBkYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlbHRhIiwiZ2V0RGVsdGEiLCJyZW5kZXIiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiem9vbSIsImRpcmVjdGlvbiIsImRlbHRhWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});