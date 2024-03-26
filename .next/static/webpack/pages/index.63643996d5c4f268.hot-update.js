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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = 0.;\n    camera.rotation.x = 0.0; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 0); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"avatar_2025/scene.gltf\", function(gltf) {\n        gltf.scene.traverse(function(child) {\n            if (child.isMesh) {\n                // Convert the material of each mesh to wireframe material\n                const wireframeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n                    color: 0xffffff,\n                    wireframe: true\n                });\n                child.material = wireframeMaterial;\n            }\n        });\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 0;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            gltf.animations.forEach((clip)=>{\n                const action = mixer.clipAction(clip);\n                const slowerDuration = clip.duration * 10; // Double the duration to slow down the animation\n                action.setDuration(slowerDuration); // Set the slower duration for the animation\n                action.loop = three__WEBPACK_IMPORTED_MODULE_0__.LoopRepeat; // Set the action to loop\n                action.clampWhenFinished = true; // Ensure animation stops at the end\n                action.play(); // Start playing the animation\n            });\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        // Manually adjust camera orientation here if needed\n        // For example, rotate 180 degrees around the Y axis\n        // camera.rotation.y += Math.PI; \n        }\n        composer.render();\n    }\n    animate();\n    let parallaxIntensity = 0.25;\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n        // Add parallax effect\n        camera.position.x = mouse.x * parallaxIntensity;\n        camera.position.y = -mouse.y * parallaxIntensity; // Invert the y-axis\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnpFLE9BQU82RCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUNhO1FBQ2xDaEYsTUFBTWEsQ0FBQyxHQUFHLE1BQU9vRSxPQUFPLEdBQUczRSxPQUFPQyxVQUFVLEdBQUksSUFBSTtRQUNwRFAsTUFBTVcsQ0FBQyxHQUFHLENBQUVxRSxDQUFBQSxNQUFNRSxPQUFPLEdBQUc1RSxPQUFPRSxXQUFXLElBQUksSUFBSTtRQUV0RCxzQkFBc0I7UUFDdEJKLE9BQU9LLFFBQVEsQ0FBQ0ksQ0FBQyxHQUFHYixNQUFNYSxDQUFDLEdBQUdrRTtRQUM5QjNFLE9BQU9LLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUNYLE1BQU1XLENBQUMsR0FBR29FLG1CQUFtQixvQkFBb0I7SUFDMUU7SUFFQSxTQUFTSSxLQUFLQyxTQUFTO1FBQ25CaEYsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUkwRTtJQUN6QjtJQUNBOUUsT0FBTzZELGdCQUFnQixDQUFDLFNBQVMsQ0FBQ2E7UUFDOUJHLEtBQUtILE1BQU1LLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMC47XG4gICAgY2FtZXJhLnJvdGF0aW9uLnggPSAwLjA7IC8vIFJvdGF0ZSBjYW1lcmEgc2xpZ2h0bHkgdXB3YXJkc1xuXG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4RjVGNURDLCAwKTsgLy8gQmVpZ2UgY29sb3IgYXMgZGVmYXVsdFxuXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbi8vIExvYWQgdGhlIEdMVEYgbW9kZWxcbmxldCBtaXhlcjsgLy8gQW5pbWF0aW9uIG1peGVyXG5jb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xubG9hZGVyLmxvYWQoJ2F2YXRhcl8yMDI1L3NjZW5lLmdsdGYnLCBmdW5jdGlvbiAoZ2x0Zikge1xuICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1hdGVyaWFsIG9mIGVhY2ggbWVzaCB0byB3aXJlZnJhbWUgbWF0ZXJpYWxcbiAgICAgICAgICAgIGNvbnN0IHdpcmVmcmFtZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCB3aXJlZnJhbWU6IHRydWUgfSk7XG4gICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IHdpcmVmcmFtZU1hdGVyaWFsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZ2x0Zi5zY2VuZS5zY2FsZS5zZXQoMSwgMSwgMSk7XG4gICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgIHNjZW5lLnBvc2l0aW9uLnggLT0gMDtcbiAgICBzY2VuZS5wb3NpdGlvbi55IC09IDA7XG4gICAgaWYgKGdsdGYuYW5pbWF0aW9ucyAmJiBnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIG1peGVyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKGdsdGYuc2NlbmUpO1xuICAgICAgICBnbHRmLmFuaW1hdGlvbnMuZm9yRWFjaCgoY2xpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbihjbGlwKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3dlckR1cmF0aW9uID0gY2xpcC5kdXJhdGlvbiAqIDEwOyAvLyBEb3VibGUgdGhlIGR1cmF0aW9uIHRvIHNsb3cgZG93biB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICBhY3Rpb24uc2V0RHVyYXRpb24oc2xvd2VyRHVyYXRpb24pOyAvLyBTZXQgdGhlIHNsb3dlciBkdXJhdGlvbiBmb3IgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgYWN0aW9uLmxvb3AgPSBUSFJFRS5Mb29wUmVwZWF0OyAvLyBTZXQgdGhlIGFjdGlvbiB0byBsb29wXG4gICAgICAgICAgICBhY3Rpb24uY2xhbXBXaGVuRmluaXNoZWQgPSB0cnVlOyAvLyBFbnN1cmUgYW5pbWF0aW9uIHN0b3BzIGF0IHRoZSBlbmRcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7IC8vIFN0YXJ0IHBsYXlpbmcgdGhlIGFuaW1hdGlvblxuICAgICAgICB9KTtcbiAgICB9XG59LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuICAgIC8vIENyZWF0ZSBsaWdodHNcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMSwgMSwgMSk7XG4gICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgLy8gUG9zdC1wcm9jZXNzaW5nXG4gICAgY29uc3QgcmVuZGVyU2NlbmUgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhKTtcblxuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAxLjUsIDAuNCwgMC44NVxuICAgICk7XG4gICAgYmxvb21QYXNzLnRocmVzaG9sZCA9IDAuMTtcbiAgICBibG9vbVBhc3Muc3RyZW5ndGggPSAwLjQ7XG4gICAgYmxvb21QYXNzLnJhZGl1cyA9IDAuMTtcblxuICAgIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclNjZW5lKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XG5cbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgLy8gRGV2aWNlIG9yaWVudGF0aW9uIGNvbnRyb2xzIGZvciBtb2JpbGVcbiAgICBsZXQgZGV2aWNlT3JpZW50YXRpb25Db250cm9scztcbiAgICBpZiAoL01vYml8QW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyhjYW1lcmEpO1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmNvbm5lY3QoKTtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy51cGRhdGUoKTsgLy8gVXBkYXRlIHRvIGFsaWduIHdpdGggdGhlIGRlZmF1bHQgY2FtZXJhIHNldHRpbmdzXG4gICAgfVxuXG4vLyBBbmltYXRpb24gbG9vcFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuICAgIGlmIChtaXhlcikge1xuICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgICBpZiAoZGV2aWNlT3JpZW50YXRpb25Db250cm9scykge1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICAvLyBNYW51YWxseSBhZGp1c3QgY2FtZXJhIG9yaWVudGF0aW9uIGhlcmUgaWYgbmVlZGVkXG4gICAgICAgIC8vIEZvciBleGFtcGxlLCByb3RhdGUgMTgwIGRlZ3JlZXMgYXJvdW5kIHRoZSBZIGF4aXNcbiAgICAgICAgLy8gY2FtZXJhLnJvdGF0aW9uLnkgKz0gTWF0aC5QSTsgXG4gICAgfVxuICAgIGNvbXBvc2VyLnJlbmRlcigpO1xufVxuXG4gICAgYW5pbWF0ZSgpO1xuICAgIGxldCBwYXJhbGxheEludGVuc2l0eSA9IDAuMjU7XG4gICAgLy8gTW91c2UgYW5kIHpvb20gY29udHJvbHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vdXNlLnggPSAoZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xuICAgICAgICBtb3VzZS55ID0gLShldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xuICAgIFxuICAgICAgICAvLyBBZGQgcGFyYWxsYXggZWZmZWN0XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gbW91c2UueCAqIHBhcmFsbGF4SW50ZW5zaXR5O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IC1tb3VzZS55ICogcGFyYWxsYXhJbnRlbnNpdHk7IC8vIEludmVydCB0aGUgeS1heGlzXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xuXG4gICAgXG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJ5Iiwicm90YXRpb24iLCJ4IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm1peGVyIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJ0cmF2ZXJzZSIsImNoaWxkIiwiaXNNZXNoIiwid2lyZWZyYW1lTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwibWF0ZXJpYWwiLCJzY2FsZSIsInNldCIsImFkZCIsImFuaW1hdGlvbnMiLCJsZW5ndGgiLCJBbmltYXRpb25NaXhlciIsImZvckVhY2giLCJjbGlwIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInNsb3dlckR1cmF0aW9uIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImxvb3AiLCJMb29wUmVwZWF0IiwiY2xhbXBXaGVuRmluaXNoZWQiLCJwbGF5IiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjb25zb2xlIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJyZW5kZXJTY2VuZSIsImJsb29tUGFzcyIsInRocmVzaG9sZCIsInN0cmVuZ3RoIiwicmFkaXVzIiwiY29tcG9zZXIiLCJhZGRQYXNzIiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY29ubmVjdCIsInVwZGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWx0YSIsImdldERlbHRhIiwicmVuZGVyIiwicGFyYWxsYXhJbnRlbnNpdHkiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiem9vbSIsImRpcmVjdGlvbiIsImRlbHRhWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});