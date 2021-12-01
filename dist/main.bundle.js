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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\nhtml, body {\\n    margin: 0;\\n    width: 100%;\\n    height: 100%;\\n    font-family: 'Montserrat', sans-serif;\\n\\n}\\n\\n:root {\\n    --orange: #fda058;\\n    --yellow: #f6d365;\\n    --white: #ffffff;\\n    --black: #323232;\\n\\n}\\nbody {\\n    background-image: linear-gradient(120deg, var(--orange), var(--yellow)) ;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    background-attachment: fixed;\\n}\\n.container {\\n    margin: 0 auto;\\n    padding: 0 30px;\\n    height: 100%;\\n    /* max-width: 1200px; */\\n  }\\n\\nh1, h2 {\\n    color: var(--white);\\n    text-align: center;\\n}\\nh1 {\\n    font-size:40px;\\n}\\nh2 {\\n    font-size:35px;\\n    padding: 20px 0;\\n}\\nbutton {\\n    padding: 8px 12px;\\n    border-radius: 30px;\\n    background-color: var(--orange);\\n    border: 1px solid var(--white);\\n    color: var(--white);\\n    font-weight: 600;\\n    font-size: 17px;\\n    cursor: pointer;\\n\\n}\\n.dynamicContent {\\n    /* display: flex; */\\n    justify-content: center;\\n    align-items: center;\\n    /* min-height: 100vh; */\\n}\\n.trivia__startButton {\\n    padding: 11px 40px;\\n\\n}\\n.trivia__description {\\n    margin: 20px 0px 30px 0;\\n    font-size: 19px;\\n}\\n\\n.gradientTop {\\n    background-image: linear-gradient(120deg, var(--yellow), var(--white)) ;\\n    height: 2px;\\n    width: 100%;\\n    margin-top: 15px;\\n}\\n.trivia__quizTop p {\\n    text-align: center;\\n    font-size: 18px;\\n}\\n.trivia__quizTop {\\n    background: var(--orange);\\n\\n}\\n.trivia__startPage {\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    align-items: center;\\n    height: 100%;\\n}\\n.trivia__question {\\n    padding: 20px 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: flex-start;\\n}\\n.trivia__answer {\\n    padding: 5px 10px;\\n}\\n.trivia__answers {\\n    display: inline;\\n    margin-top: 10px;\\n}\\n.trivia__question p {\\n    font-weight: 600;\\n    color: var(--black);\\n    padding: 5px 0px;\\n    display: inline;\\n    font-size: 17px;\\n}\\n.trivia__checkmark {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    height: 25px;\\n    width: 25px;\\n    background-color: #eee;\\n    border-radius: 50%;\\n}\\n.trivia__answer input {\\n    position: absolute;\\n    opacity: 0;\\n    cursor: pointer;\\n    height: 0;\\n    width: 0;\\n  }\\n.trivia__answer {\\n    position: relative;\\n    padding-left: 35px;\\n    margin: 10px;    \\n    cursor: pointer;\\n    font-size: 16px;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n}\\n\\n/* On mouse-over, add a grey background color */\\n.trivia__answer:hover input ~ .trivia__checkmark {\\n    background-color: #ccc;\\n  }\\n  \\n  /* When the radio button is checked, add a blue background */\\n  .trivia__answer input:checked ~ .trivia__checkmark {\\n    background-color:var(--orange);\\n  }\\n  \\n  /* Create the indicator (the dot/circle - hidden when not checked) */\\n  .trivia__checkmark:after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    display: none;\\n  }\\n  \\n  /* Show the indicator (dot/circle) when checked */\\n  .trivia__answer input:checked ~ .trivia__checkmark:after {\\n    display: block;\\n  }\\n  \\n  /* Style the indicator (dot/circle) */\\n  .trivia__answer .trivia__checkmark:after {\\n    top: 9px;\\n    left: 9px;\\n    width: 8px;\\n    height: 8px;\\n    border-radius: 50%;\\n    background: white;\\n  }\\n  .trivia__endQuizButton {\\n      margin: 30px auto;\\n      display: block;\\n  }\\n  .trivia__quizDiv {\\n      padding-bottom: 30px;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://trivia/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://trivia/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://trivia/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://trivia/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-page */ \"./src/start-page.js\");\n\n;\n\n\n//Event Listeners\nwindow.addEventListener('DOMContentLoaded',() => {\n    _start_page__WEBPACK_IMPORTED_MODULE_1__.createStartpage();\n    const startButton = document.querySelector('.trivia__startButton');\n    startButton.addEventListener('click', _start_page__WEBPACK_IMPORTED_MODULE_1__.startQuizButtonClick);\n\n});\n\n//# sourceURL=webpack://trivia/./src/index.js?");

/***/ }),

/***/ "./src/quiz-page.js":
/*!**************************!*\
  !*** ./src/quiz-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createQuizPage\": () => (/* binding */ createQuizPage)\n/* harmony export */ });\n/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-page */ \"./src/summary-page.js\");\n\n\nconst containerDiv = document.querySelector('.trivia__container');\nconst quizDiv = document.createElement('div');\nconst quizTopDiv = document.createElement('div');\nconst gradientTop = document.createElement('div');\nconst usersAnswers = [];\ngradientTop.classList.add('gradientTop');\nquizDiv.classList.add('trivia__quizDiv');\nquizTopDiv.classList.add('trivia__quizTop');\n\n\nfunction createQuizPage() {\n\n    const url = \"http://127.0.0.1:5000/questions\";\n   fetch(url)\n        .then(response => response.json())\n        .then(result => result.questions)\n        .then(questions => displayQuestions(questions))\n        .catch(function (err){\n            return err;\n        })\n}\n\n\nfunction displayQuestions(questions) {\n    const quizListDiv = document.createElement('form');\n    const startPageH2 = document.createElement('h2');\n    const startPageDescription = document.createElement('p');\n    const endQuizButton = document.createElement('button');\n\n    endQuizButton.innerText = \"SAVE ANSWERS\";\n    endQuizButton.classList.add('trivia__endQuizButton');\n    startPageH2.innerText = ',,The Office\" Trivia Quiz';\n    startPageDescription.innerText = 'Are you ready? Answer the questions below and check if you can eat additional kinder bueno today as a reward!';\n    quizListDiv.classList.add('trivia__questionList');\n\n    let questionID = 0;\n    questions.forEach(element => {\n        let questionDiv = document.createElement('div');\n        let answersDiv = document.createElement('div');\n        let questionText = document.createElement('p');\n        questionDiv.classList.add('trivia__question');\n        answersDiv.classList.add('trivia__answers');\n        questionDiv.classList.add('question-'+ questionID);\n        questionText.innerText = element.question;\n        questionDiv.appendChild(questionText);\n        quizListDiv.appendChild(questionDiv);\n        questionDiv.appendChild(answersDiv);\n\n        let answerID = 1;\n        element.answers.forEach(answer => {\n\n            let name = 'answer-'+questionID;\n            let answerLabel = document.createElement('label');\n            let answerInput = document.createElement('input');\n            let answerCheckmark = document.createElement('span');\n            answerLabel.classList.add('trivia__answer');\n            answerCheckmark.classList.add('trivia__checkmark');\n            answerInput.setAttribute('type', 'radio');\n            answerInput.setAttribute('name', name)\n            answerInput.setAttribute('value', answerID)\n            answerLabel.innerText = answer;\n            answerLabel.appendChild(answerInput);\n            answerLabel.appendChild(answerCheckmark);\n\n            answersDiv.appendChild(answerLabel);\n            answerID++;\n\n        })\n\n\n       questionID++;\n\n    });\n    \n    quizDiv.appendChild(quizTopDiv);\n    quizTopDiv.appendChild(startPageH2);\n    quizTopDiv.appendChild(startPageDescription);\n    quizTopDiv.appendChild(gradientTop);\n    quizDiv.appendChild(quizListDiv);\n    quizDiv.appendChild(endQuizButton);\n    containerDiv.appendChild(quizDiv);\n\n    endQuizButton.addEventListener('click', (e) => (0,_summary_page__WEBPACK_IMPORTED_MODULE_0__.takeUsersAnswers)(questions));\n    // endQuizButton.onclick = blabla;\n\n\n}\n\n\n//# sourceURL=webpack://trivia/./src/quiz-page.js?");

/***/ }),

/***/ "./src/start-page.js":
/*!***************************!*\
  !*** ./src/start-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStartpage\": () => (/* binding */ createStartpage),\n/* harmony export */   \"startQuizButtonClick\": () => (/* binding */ startQuizButtonClick)\n/* harmony export */ });\n/* harmony import */ var _quiz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-page */ \"./src/quiz-page.js\");\n\n \nconst containerDiv = document.querySelector('.trivia__container');\n\nfunction createStartpage() {\n    const startPageDiv = document.createElement('div');\n    startPageDiv.classList.add('trivia__startPage');\n\n    const startPageH1 = document.createElement('h1');\n    startPageH1.innerText = ',,The Office\" Trivia Quiz';\n    startPageDiv.appendChild(startPageH1);\n\n    const startPageP = document.createElement('p');\n    startPageP.classList.add('trivia__description');\n    startPageP.innerText = 'check how well you know your favorite TV series!';\n    startPageDiv.appendChild(startPageP);\n\n    const startPageButton = document.createElement('button');\n    startPageButton.classList.add('trivia__startButton');\n    startPageButton.innerText = 'START';\n    startPageDiv.appendChild(startPageButton);\n\n    containerDiv.appendChild(startPageDiv);\n}\n\nfunction startQuizButtonClick() {\n    const startpageDiv = document.querySelector('.trivia__startPage');\n    containerDiv.removeChild(startpageDiv);\n    (0,_quiz_page__WEBPACK_IMPORTED_MODULE_0__.createQuizPage)();\n}\n\n//# sourceURL=webpack://trivia/./src/start-page.js?");

/***/ }),

/***/ "./src/summary-page.js":
/*!*****************************!*\
  !*** ./src/summary-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"takeUsersAnswers\": () => (/* binding */ takeUsersAnswers)\n/* harmony export */ });\n\n\nfunction takeUsersAnswers(questionsArray) {\n\n    let questionNumber = 0;\n    questionsArray.forEach(element => {\n        // console.log(element);\n        let answerDiv = document.querySelector('.question-' + questionNumber);\n\n        let answerInputs = answerDiv.querySelectorAll('input');\n        let selectedValue;\n        for (const input of Array.from(answerInputs)) {\n            if (input.checked) {\n                selectedValue = input.value;\n                break;\n            }\n        }\n        element[\"answer\"] = selectedValue;\n\n        questionNumber++;\n    });\n    checkUserAnswers(questionsArray);\n}\n\nfunction checkUserAnswers(questionsArray) {\n    const body = JSON.stringify(questionsArray);\n    fetch('http://127.0.0.1:5000/answers', {\n        method: 'POST',\n        mode: 'no-cors',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n        },\n        body: body,\n    })\n        .then(async response => await response.json())\n        .then(questionsArray => {\n            console.log('Success:', questionsArray);\n        })\n        .catch((error) => {\n            console.error('Error:', error);\n        });\n}\n\n//# sourceURL=webpack://trivia/./src/summary-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;