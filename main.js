/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root\n{\n    --color-primary-text: #f8f8f8;\n    --color-background: #16181a;\n}\n\n*\n{\n    margin: 0;\n    font-family: \"Bodoni MT\", Didot, \"Didot LT STD\", \"Book Antiqua\", Garamond, \"Times New Roman\", serif;\n    color: var(--color-primary-text);\n}\n\nbody {\n  background-color: var(--color-background);\n}\n\nheader\n{\n    color: var(--color-primary-text);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 12vh;\n    padding: 0px 20vh;\n    border-bottom: 1px solid #2d3136;\n}\n\nheader p\n{\n    font-weight: bold;\n    font-size: 20px;\n}\n\nnav\n{\n    display: flex;\n    gap: 15px;;\n}\n\nnav button \n{\n    background-color: #22272c;\n    color: var(--color-primary-text);\n    border: 1px solid #2d3136;\n    border-radius: 8px;\n    width: 7vw;\n    height: 6vh;\n    transition: background-color 0.2s ease,\n                transform 0.2s ease;\n}\n\nnav button:hover\n{\n    background-color: #fcb144;\n    color: black;\n    cursor: pointer;\n    transform: translateY(-2px);\n}\n\nnav button.active\n{\n    background-color: #fcb144;\n    color: black;\n}\n\n#hero-image\n{\n    width: 100%;\n    height: 75vh;\n    object-fit:cover;\n}\n\n#hero\n{\n    display: flex;\n    align-items: center;\n}\n\n#hero-content\n{\n    position: absolute;\n    padding: 15vh;\n    width: 35vw;\n}\n\n#hero-first\n{\n    letter-spacing: 3px;\n    font-size: 14px;\n    font-weight: 100;\n}\n\n#hero-title\n{\n    letter-spacing: 2px;\n    font-size: 48px;\n    font-weight: bold;\n    margin-top: 10px;\n}\n\n#hero-text\n{\n    margin-top: 20px;\n    font-weight: 100;\n    letter-spacing: 1px;\n    line-height: 25px;\n}\n\n#choose-us\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 5vh 15vw;\n}\n\n#choose-us h2\n{\n    font-size: 30px;\n}\n\n#reasons-container\n{\n    margin-top: 10vh;\n    display: flex;\n    flex-direction: row;\n    gap: 5vw;\n}\n\n.reason-div\n{\n    width: 25%;\n    text-align: center;\n}\n\n.reason-div img\n{\n    width: 45px;\n}\n\n.reason-div h3\n{\n    margin-top: 2vh;\n    letter-spacing: 2px;\n}\n\n.reason-div p\n{\n    letter-spacing: 0.8px;\n    margin-top: 3vh;\n}\n\n#menu\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10vh 5vw;\n}\n\n#starter-container\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    gap: 3vw;\n}\n\n.dishes {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 20px;\n    min-height: 160px;\n    border: 1px solid #2d3136;\n    border-radius: 8px;\n    background-color: transparent;\n    transition: border-color 0.2s ease, background-color 0.2s ease;\n    flex: auto;\n}\n\n.dishes:hover {\n    border-color: #fcb144;\n    background-color: #0000002b;\n}\n\n.dishes img {\n    width: 120px;\n    height: 120px;\n    flex-shrink: 0;\n    object-fit: cover;\n    border-radius: 10px;\n}\n\n.dish-content {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.dish-content h2 {\n    margin: 0;\n    font-size: 1.2rem;\n    color: #F5F5F5;\n}\n\n.dish-content p {\n    margin: 0;\n    color: #a0a0a0;\n    line-height: 1.5;\n    font-size: 0.8rem;\n}\n\n.dish-content h3 {\n    margin: 0;\n    color: #fcb144;\n    font-size: 1.1rem;\n}\n\n#main-course-container {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 3vw;\n    width: 100%;\n    max-width: 1100px;\n    margin-top: 4rem;\n}\n\n#main-course-container .dishes {\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.menu-category {\n    width: 100%;\n    max-width: 1100px;\n    margin: 3rem 0 1.5rem;\n    color: #fcb144;\n    font-size: 1.5rem;\n    font-weight: 600;\n    text-align: left;\n    border-bottom: 1px solid #2d3136;\n    padding-bottom: 12px;\n}\n\n#menu > .menu-category:first-of-type {\n    margin-top: 2rem;\n}\n\n\n#contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3.5rem;\n    margin: 10vh 5vw;\n    color: #F5F5F5;\n}\n\n.contact-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    max-width: 700px;\n    text-align: center;\n}\n\n.contact-eyebrow {\n    margin: 0;\n    color: #fcb144;\n    font-size: 0.8rem;\n    font-weight: 600;\n    letter-spacing: 3px;\n}\n\n.contact-header h2 {\n    margin: 0;\n    font-size: clamp(2rem, 4vw, 3.5rem);\n}\n\n.contact-header > p:last-child {\n    margin: 0;\n    color: #a0a0a0;\n    line-height: 1.7;\n}\n\n.contact-container {\n    width: 100%;\n    max-width: 700px;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    padding: 2rem;\n    border: 1px solid #2d3136;\n    border-radius: 10px;\n    background-color: #111111;\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\n.form-group label {\n    font-size: 0.9rem;\n    font-weight: 500;\n}\n\n.form-group input,\n.form-group textarea {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0.9rem 1rem;\n    border: 1px solid #2d3136;\n    border-radius: 6px;\n    outline: none;\n    background-color: #1a1a1a;\n    color: #F5F5F5;\n    font: inherit;\n    font-size: 0.9rem;\n    transition: border-color 0.2s ease,\n                box-shadow 0.2s ease;\n}\n\n.form-group input::placeholder,\n.form-group textarea::placeholder {\n    color: #777777;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n    border-color: #fcb144;\n    box-shadow: 0 0 0 3px rgb(252 177 68 / 12%);\n}\n\n.form-group textarea {\n    resize: vertical;\n    min-height: 130px;\n}\n\n.contact-form button {\n    align-self: flex-start;\n    padding: 0.9rem 1.5rem;\n    border: 1px solid #fcb144;\n    border-radius: 6px;\n    background-color: #fcb144;\n    color: #0c0c0c;\n    font: inherit;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color 0.2s ease,\n                transform 0.2s ease;\n}\n\n.contact-form button:hover {\n    background-color: #e9a035;\n    transform: translateY(-2px);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/chef.png"
/*!*****************************!*\
  !*** ./src/assets/chef.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d6bbfcdbca2be94350cc.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/chef.png?\n}");

/***/ },

/***/ "./src/assets/hero-background.png"
/*!****************************************!*\
  !*** ./src/assets/hero-background.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8dd47e30d335d845dacf.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/hero-background.png?\n}");

/***/ },

/***/ "./src/assets/leaf.png"
/*!*****************************!*\
  !*** ./src/assets/leaf.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"504b9f701ac7712b331b.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/leaf.png?\n}");

/***/ },

/***/ "./src/assets/people.png"
/*!*******************************!*\
  !*** ./src/assets/people.png ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c28bfcdeb4f4e6767829.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/people.png?\n}");

/***/ },

/***/ "./src/assets/restaurant.png"
/*!***********************************!*\
  !*** ./src/assets/restaurant.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a51d46690190e2af69e8.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/restaurant.png?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showContactContent)\n/* harmony export */ });\nfunction showContactContent(content) {\n    const contactSection = document.createElement(\"section\");\n    contactSection.id = \"contact\";\n\n    // Header\n    const contactHeader = document.createElement(\"div\");\n    contactHeader.className = \"contact-header\";\n\n    const eyebrow = document.createElement(\"p\");\n    eyebrow.className = \"contact-eyebrow\";\n    eyebrow.innerText = \"GET IN TOUCH\";\n\n    const title = document.createElement(\"h2\");\n    title.innerText = \"Contact Us\";\n\n    const intro = document.createElement(\"p\");\n    intro.innerText =\n        \"Have a question or planning a visit? We'd love to hear from you.\";\n\n    contactHeader.appendChild(eyebrow);\n    contactHeader.appendChild(title);\n    contactHeader.appendChild(intro);\n\n    // Main layout\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.className = \"contact-container\";\n\n    \n    // Contact form\n    const contactForm = document.createElement(\"form\");\n    contactForm.className = \"contact-form\";\n\n    const formTitle = document.createElement(\"h3\");\n    formTitle.innerText = \"Send Us a Message\";\n\n    contactForm.appendChild(formTitle);\n\n    const fields = [\n        {\n            label: \"Your Name\",\n            name: \"name\",\n            type: \"text\",\n            placeholder: \"Enter your name\"\n        },\n        {\n            label: \"Your Email\",\n            name: \"email\",\n            type: \"email\",\n            placeholder: \"Enter your email\"\n        }\n    ];\n\n    fields.forEach((field) => {\n        const group = document.createElement(\"div\");\n        group.className = \"form-group\";\n\n        const label = document.createElement(\"label\");\n        label.htmlFor = field.name;\n        label.innerText = field.label;\n\n        const input = document.createElement(\"input\");\n        input.id = field.name;\n        input.name = field.name;\n        input.type = field.type;\n        input.placeholder = field.placeholder;\n        input.required = true;\n\n        group.appendChild(label);\n        group.appendChild(input);\n        contactForm.appendChild(group);\n    });\n\n    const messageGroup = document.createElement(\"div\");\n    messageGroup.className = \"form-group\";\n\n    const messageLabel = document.createElement(\"label\");\n    messageLabel.htmlFor = \"message\";\n    messageLabel.innerText = \"Your Message\";\n\n    const messageInput = document.createElement(\"textarea\");\n    messageInput.id = \"message\";\n    messageInput.name = \"message\";\n    messageInput.placeholder = \"How can we help you?\";\n    messageInput.rows = 5;\n    messageInput.required = true;\n\n    messageGroup.appendChild(messageLabel);\n    messageGroup.appendChild(messageInput);\n    contactForm.appendChild(messageGroup);\n\n    const submitButton = document.createElement(\"button\");\n    submitButton.type = \"submit\";\n    submitButton.innerText = \"Send Message\";\n\n    contactForm.appendChild(submitButton);\n\n    // Prevent accidental page reload until a backend is connected\n    contactForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        alert(\"Thanks for reaching out! The contact form is not connected yet.\");\n    });\n\n    contactContainer.appendChild(contactForm);\n\n    contactSection.appendChild(contactHeader);\n    contactSection.appendChild(contactContainer);\n    content.appendChild(contactSection);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showHomeContent)\n/* harmony export */ });\n/* harmony import */ var _assets_hero_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hero-background.png */ \"./src/assets/hero-background.png\");\n/* harmony import */ var _assets_leaf_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/leaf.png */ \"./src/assets/leaf.png\");\n/* harmony import */ var _assets_chef_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chef.png */ \"./src/assets/chef.png\");\n/* harmony import */ var _assets_people_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/people.png */ \"./src/assets/people.png\");\n/* harmony import */ var _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/restaurant.png */ \"./src/assets/restaurant.png\");\n\n\n\n\n\n\nfunction showHomeContent(content) {\n\n    const heroSection = document.createElement(\"section\");\n    heroSection.id = \"hero\";\n\n    const heroBackground = document.createElement(\"img\");\n    heroBackground.src = _assets_hero_background_png__WEBPACK_IMPORTED_MODULE_0__;\n    heroBackground.alt = \"image\";\n    heroBackground.id = \"hero-image\"\n\n    const heroContent = document.createElement(\"div\");\n    heroContent.id = \"hero-content\";\n\n    const heroFirst = document.createElement(\"p\");\n    heroFirst.textContent = \"WELCOME TO\";\n    heroFirst.id = \"hero-first\";\n    heroContent.appendChild(heroFirst);\n\n    const heroTitle = document.createElement(\"p\");\n    heroTitle.textContent = \"The Golden Fork\";\n    heroTitle.id = \"hero-title\";\n    heroContent.appendChild(heroTitle);\n\n    const heroText = document.createElement(\"p\");\n    heroText.textContent = \"Good food, great company. Enjoy fresh ingredients, delicious meals and a warm armosphere at The Golden Fork\";\n    heroText.id = \"hero-text\";\n    heroContent.appendChild(heroText);\n\n    heroSection.appendChild(heroBackground);\n    heroSection.appendChild(heroContent);\n\n\n\n\n\n\n    const chooseUs = document.createElement(\"section\");\n    chooseUs.id = \"choose-us\";\n\n    const chooseUsTitle = document.createElement(\"h2\");\n    chooseUsTitle.innerText = \"Why Choose Us?\";\n    chooseUs.appendChild(chooseUsTitle);\n\n    const reasonsContainer = document.createElement(\"div\");\n    reasonsContainer.id = \"reasons-container\";\n    chooseUs.appendChild(reasonsContainer);\n\n\n\n\n\n    const reason1Div = document.createElement(\"div\");\n    reason1Div.className = \"reason-div\";\n\n    const reason1Img = document.createElement(\"img\");\n    reason1Img.src = _assets_leaf_png__WEBPACK_IMPORTED_MODULE_1__;\n    reason1Div.appendChild(reason1Img);\n\n    const reason1Title = document.createElement(\"h3\");\n    reason1Title.innerText = \"Fresh Ingredients\";\n    reason1Div.appendChild(reason1Title);\n\n    const reason1Text = document.createElement(\"p\");\n    reason1Text.innerText = \"We use only the freshest, locally sourced ingredients.\";\n    reason1Div.appendChild(reason1Text);\n\n    reasonsContainer.appendChild(reason1Div)\n\n\n\n\n    const reason2Div = document.createElement(\"div\");\n    reason2Div.className = \"reason-div\";\n\n    const reason2Img = document.createElement(\"img\");\n    reason2Img.src = _assets_chef_png__WEBPACK_IMPORTED_MODULE_2__;\n    reason2Div.appendChild(reason2Img);\n\n    const reason2Title = document.createElement(\"h3\");\n    reason2Title.innerText = \"Skilled Chefs\";\n    reason2Div.appendChild(reason2Title);\n\n    const reason2Text = document.createElement(\"p\");\n    reason2Text.innerText = \"Our experienced chefs craft each dish with passion and care.\";\n    reason2Div.appendChild(reason2Text);\n\n    reasonsContainer.appendChild(reason2Div)\n\n\n\n    const reason3Div = document.createElement(\"div\");\n    reason3Div.className = \"reason-div\";\n\n    const reason3Img = document.createElement(\"img\");\n    reason3Img.src = _assets_people_png__WEBPACK_IMPORTED_MODULE_3__;\n    reason3Div.appendChild(reason3Img);\n\n    const reason3Title = document.createElement(\"h3\");\n    reason3Title.innerText = \"Great Atmosphere\";\n    reason3Div.appendChild(reason3Title);\n\n    const reason3Text = document.createElement(\"p\");\n    reason3Text.innerText = \"Relax and enjoy a warm, welcoming environment.\";\n    reason3Div.appendChild(reason3Text);\n\n    reasonsContainer.appendChild(reason3Div)\n\n\n\n    const reason4Div = document.createElement(\"div\");\n    reason4Div.className = \"reason-div\";\n\n    const reason4Img = document.createElement(\"img\");\n    reason4Img.src = _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_4__;\n    reason4Div.appendChild(reason4Img);\n\n    const reason4Title = document.createElement(\"h3\");\n    reason4Title.innerText = \"Something for Everyone\";\n    reason4Div.appendChild(reason4Title);\n\n    const reason4Text = document.createElement(\"p\");\n    reason4Text.innerText = \"From hearty classics to unique specials, there's a dish for everyone's taste.\";\n    reason4Div.appendChild(reason4Text);\n\n    reasonsContainer.appendChild(reason4Div)\n\n\n\n    content.appendChild(heroSection);\n    content.appendChild(chooseUs);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nfunction clearPageContent() {\n    while (content.firstChild) {\n        content.firstChild.remove();\n    }\n}\n\nconst homeButton = document.getElementById(\"home-button\");\nconst menuButton = document.getElementById(\"menu-button\");\nconst contactButton = document.getElementById(\"contact-button\");\n\n\nconst buttons = [homeButton, menuButton, contactButton];\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n\nbuttons.forEach(button => {\n    button.addEventListener(\"click\", () => {\n        buttons.forEach(button => button.classList.remove(\"active\"));\n        button.className = \"active\";\n\n        let activeButton = document.querySelector(\".active\");\n        if (activeButton.id == \"home-button\") {\n            clearPageContent();\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n        }\n\n        else if (activeButton.id == \"menu-button\") {\n            clearPageContent();\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n        }\n\n        else if (activeButton.id == \"contact-button\")\n        {\n            clearPageContent();\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n        }\n    })\n});\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMenuContent)\n/* harmony export */ });\nfunction showMenuContent(content) {\n    const menuSection = document.createElement(\"section\");\n    menuSection.id = \"menu\";\n\n    const menuTitle = document.createElement(\"h2\");\n    menuTitle.innerText = \"Our Menu\";\n    menuSection.appendChild(menuTitle);\n\n    const menuText = document.createElement(\"p\");\n    menuText.innerText = \"Fresh ingredients. Thoughtfully prepared. Made to be enjoyed\";\n    menuSection.appendChild(menuText);\n\n    const starterTitle = document.createElement(\"h3\");\n    starterTitle.className = \"menu-category\";\n    starterTitle.innerText = \"Starters\";\n    menuSection.appendChild(starterTitle);\n\n    const starterContainer = document.createElement(\"div\");\n    starterContainer.id = \"starter-container\";\n\n    // Dish 1\n    const starter1 = document.createElement(\"div\");\n    starter1.className = \"dishes\";\n\n    const starter1Img = document.createElement(\"img\");\n    starter1Img.src = \"https://lifewithjanet.com/wp-content/uploads/2023/10/Garlic-Parmesan-Mushrooms.png\";\n\n    const starter1Content = document.createElement(\"div\");\n    starter1Content.className = \"dish-content\";\n\n    const starter1Title = document.createElement(\"h2\");\n    starter1Title.innerText = \"Garlic Parmesan Mushrooms\";\n\n    const starter1Text = document.createElement(\"p\");\n    starter1Text.innerText = \"Garlic Parmesan Mushrooms, the ultimate savory treat for mushroom lovers everywhere.\";\n\n    const starter1Price = document.createElement(\"h3\");\n    starter1Price.innerText = \"R85\";\n\n    starter1.appendChild(starter1Img);\n    starter1Content.appendChild(starter1Title);\n    starter1Content.appendChild(starter1Text);\n    starter1Content.appendChild(starter1Price);\n    starter1.appendChild(starter1Content);\n    starterContainer.appendChild(starter1);\n\n    // Dish 2\n    const starter2 = document.createElement(\"div\");\n    starter2.className = \"dishes\";\n\n    const starter2Img = document.createElement(\"img\");\n    starter2Img.src = \"https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600\";\n\n    const starter2Content = document.createElement(\"div\");\n    starter2Content.className = \"dish-content\";\n\n    const starter2Title = document.createElement(\"h2\");\n    starter2Title.innerText = \"Classic Bruschetta\";\n\n    const starter2Text = document.createElement(\"p\");\n    starter2Text.innerText = \"Toasted bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil.\";\n\n    const starter2Price = document.createElement(\"h3\");\n    starter2Price.innerText = \"R65\";\n\n    starter2.appendChild(starter2Img);\n    starter2Content.appendChild(starter2Title);\n    starter2Content.appendChild(starter2Text);\n    starter2Content.appendChild(starter2Price);\n    starter2.appendChild(starter2Content);\n    starterContainer.appendChild(starter2);\n\n    // Dish 3\n    const starter3 = document.createElement(\"div\");\n    starter3.className = \"dishes\";\n\n    const starter3Img = document.createElement(\"img\");\n    starter3Img.src = \"https://images.unsplash.com/photo-1547592180-85f173990554?w=600\";\n\n    const starter3Content = document.createElement(\"div\");\n    starter3Content.className = \"dish-content\";\n\n    const starter3Title = document.createElement(\"h2\");\n    starter3Title.innerText = \"Creamy Tomato Soup\";\n\n    const starter3Text = document.createElement(\"p\");\n    starter3Text.innerText = \"A rich, creamy tomato soup made with ripe tomatoes and fragrant herbs.\";\n\n    const starter3Price = document.createElement(\"h3\");\n    starter3Price.innerText = \"R75\";\n\n    starter3.appendChild(starter3Img);\n    starter3Content.appendChild(starter3Title);\n    starter3Content.appendChild(starter3Text);\n    starter3Content.appendChild(starter3Price);\n    starter3.appendChild(starter3Content);\n    starterContainer.appendChild(starter3);\n\n    menuSection.appendChild(starterContainer);\n\n    // Main Course\n    const mainCourseTitle = document.createElement(\"h3\");\n    mainCourseTitle.className = \"menu-category\";\n    mainCourseTitle.innerText = \"Main Courses\";\n    menuSection.appendChild(mainCourseTitle);\n    \n    const mainCourseContainer = document.createElement(\"div\");\n    mainCourseContainer.id = \"main-course-container\";\n\n    // Dish 1\n    const main1 = document.createElement(\"div\");\n    main1.className = \"dishes\";\n\n    const main1Img = document.createElement(\"img\");\n    main1Img.src = \"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600\";\n\n    const main1Content = document.createElement(\"div\");\n    main1Content.className = \"dish-content\";\n\n    const main1Title = document.createElement(\"h2\");\n    main1Title.innerText = \"Grilled Steak\";\n\n    const main1Text = document.createElement(\"p\");\n    main1Text.innerText = \"Juicy grilled steak seasoned with herbs and served with roasted vegetables.\";\n\n    const main1Price = document.createElement(\"h3\");\n    main1Price.innerText = \"R185\";\n\n    main1.appendChild(main1Img);\n    main1Content.appendChild(main1Title);\n    main1Content.appendChild(main1Text);\n    main1Content.appendChild(main1Price);\n    main1.appendChild(main1Content);\n    mainCourseContainer.appendChild(main1);\n\n    // Dish 2\n    const main2 = document.createElement(\"div\");\n    main2.className = \"dishes\";\n\n    const main2Img = document.createElement(\"img\");\n    main2Img.src = \"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600\";\n\n    const main2Content = document.createElement(\"div\");\n    main2Content.className = \"dish-content\";\n\n    const main2Title = document.createElement(\"h2\");\n    main2Title.innerText = \"Creamy Mushroom Pasta\";\n\n    const main2Text = document.createElement(\"p\");\n    main2Text.innerText = \"Tender pasta tossed in a creamy mushroom sauce with garlic and Parmesan.\";\n\n    const main2Price = document.createElement(\"h3\");\n    main2Price.innerText = \"R145\";\n\n    main2.appendChild(main2Img);\n    main2Content.appendChild(main2Title);\n    main2Content.appendChild(main2Text);\n    main2Content.appendChild(main2Price);\n    main2.appendChild(main2Content);\n    mainCourseContainer.appendChild(main2);\n\n    // Dish 3\n    const main3 = document.createElement(\"div\");\n    main3.className = \"dishes\";\n\n    const main3Img = document.createElement(\"img\");\n    main3Img.src = \"https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600\";\n\n    const main3Content = document.createElement(\"div\");\n    main3Content.className = \"dish-content\";\n\n    const main3Title = document.createElement(\"h2\");\n    main3Title.innerText = \"Roast Chicken\";\n\n    const main3Text = document.createElement(\"p\");\n    main3Text.innerText = \"Herb-roasted chicken served with golden potatoes and seasonal vegetables.\";\n\n    const main3Price = document.createElement(\"h3\");\n    main3Price.innerText = \"R160\";\n\n    main3.appendChild(main3Img);\n    main3Content.appendChild(main3Title);\n    main3Content.appendChild(main3Text);\n    main3Content.appendChild(main3Price);\n    main3.appendChild(main3Content);\n    mainCourseContainer.appendChild(main3);\n\n    // Dish 4\n    const main4 = document.createElement(\"div\");\n    main4.className = \"dishes\";\n\n    const main4Img = document.createElement(\"img\");\n    main4Img.src = \"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600\";\n\n    const main4Content = document.createElement(\"div\");\n    main4Content.className = \"dish-content\";\n\n    const main4Title = document.createElement(\"h2\");\n    main4Title.innerText = \"Classic Margherita Pizza\";\n\n    const main4Text = document.createElement(\"p\");\n    main4Text.innerText = \"A crispy pizza topped with tomato sauce, fresh mozzarella, and fragrant basil.\";\n\n    const main4Price = document.createElement(\"h3\");\n    main4Price.innerText = \"R125\";\n\n    main4.appendChild(main4Img);\n    main4Content.appendChild(main4Title);\n    main4Content.appendChild(main4Text);\n    main4Content.appendChild(main4Price);\n    main4.appendChild(main4Content);\n    mainCourseContainer.appendChild(main4);\n\n    menuSection.appendChild(mainCourseContainer);\n    content.appendChild(menuSection);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;