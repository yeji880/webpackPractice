"use strict";
(self["webpackChunkwebpack_practice"] = self["webpackChunkwebpack_practice"] || []).push([["another"],{

/***/ "./src/another-module.js":
/*!*******************************!*\
  !*** ./src/another-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

//index.js에서도 lodash 모듈을 가져오고 있다.
//이 번들에서도 lodash 모듈을 가져오고... entry로 코드 스플리팅 접근을 하면
//이렇게 중복되는 모듈을 양쪽 번들에서 모두 포함하게 되는 문제가 발생한다.
console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Another', 'module', 'loaded!'], ' '));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/another-module.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3ByYWN0aWNlLy4vc3JjL2Fub3RoZXItbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vL2luZGV4Lmpz7JeQ7ISc64+EIGxvZGFzaCDrqqjrk4jsnYQg6rCA7KC47Jik6rOgIOyeiOuLpC5cbi8v7J20IOuyiOuTpOyXkOyEnOuPhCBsb2Rhc2gg66qo65OI7J2EIOqwgOyguOyYpOqzoC4uLiBlbnRyeeuhnCDsvZTrk5wg7Iqk7ZSM66as7YyFIOygkeq3vOydhCDtlZjrqbRcbi8v7J2066CH6rKMIOykkeuzteuQmOuKlCDrqqjrk4jsnYQg7JaR7Kq9IOuyiOuTpOyXkOyEnCDrqqjrkZAg7Y+s7ZWo7ZWY6rKMIOuQmOuKlCDrrLjsoJzqsIAg67Cc7IOd7ZWc64ukLlxuY29uc29sZS5sb2coXy5qb2luKFsnQW5vdGhlcicsICdtb2R1bGUnLCAnbG9hZGVkISddLCAnICcpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==