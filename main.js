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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/Main */ \"./src/main/Main.ts\");\n\nvar main = new _main_Main__WEBPACK_IMPORTED_MODULE_0__.Main();\nmain.run();\n\n\n//# sourceURL=webpack://SnakeGame/./src/index.ts?");

/***/ }),

/***/ "./src/main/Canvas.ts":
/*!****************************!*\
  !*** ./src/main/Canvas.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => /* binding */ Canvas\n/* harmony export */ });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/main/colors.ts\");\n\nvar Canvas = (function () {\n    function Canvas(canvasId) {\n        var _this = this;\n        this.drawMatrix = function (matrix, offset) {\n            if (offset === void 0) { offset = { x: 0, y: 0 }; }\n            matrix.forEach(function (row, y) {\n                row.forEach(function (value, x) {\n                    if (value !== 0) {\n                        _this.context.fillStyle = _colors__WEBPACK_IMPORTED_MODULE_0__.colors[value];\n                        _this.context.fillRect(x + offset.x, y + offset.y, 1, 1);\n                    }\n                });\n            });\n        };\n        this.canvas = document.getElementById(canvasId);\n        this.context = this.canvas.getContext(\"2d\");\n        this.context.scale(10, 10);\n    }\n    return Canvas;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/Canvas.ts?");

/***/ }),

/***/ "./src/main/Main.ts":
/*!**************************!*\
  !*** ./src/main/Main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => /* binding */ Main\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/main/Canvas.ts\");\n/* harmony import */ var _snake_Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake/Snake */ \"./src/main/snake/Snake.ts\");\n/* harmony import */ var _arena_Arena__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arena/Arena */ \"./src/main/arena/Arena.ts\");\n/* harmony import */ var _enemies_Enemies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemies/Enemies */ \"./src/main/enemies/Enemies.ts\");\n/* harmony import */ var _points_Points__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./points/Points */ \"./src/main/points/Points.ts\");\n/* harmony import */ var _mergeUnit_MergeUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mergeUnit/MergeUnit */ \"./src/main/mergeUnit/MergeUnit.ts\");\n/* harmony import */ var _animationFrameUpdate_AnimationFrameUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animationFrameUpdate/AnimationFrameUpdate */ \"./src/main/animationFrameUpdate/AnimationFrameUpdate.ts\");\n\n\n\n\n\n\n\nvar Main = (function () {\n    function Main() {\n        var _this = this;\n        this.canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(\"snakeCanvasID\");\n        this.arena = new _arena_Arena__WEBPACK_IMPORTED_MODULE_2__.Arena();\n        this.enemies = new _enemies_Enemies__WEBPACK_IMPORTED_MODULE_3__.Enemies();\n        this.pointsHandler = function (points) {\n            var EASY_LEVEL = 1000;\n            var MEDIUM_LEVEL = 2000;\n            var HARD_LEVEL = 3000;\n            if (points > EASY_LEVEL && points < MEDIUM_LEVEL) {\n                _this.updater.setLevel(\"normal\");\n            }\n            if (points > MEDIUM_LEVEL && points < HARD_LEVEL) {\n                _this.updater.setLevel(\"hard\");\n            }\n            if (points > HARD_LEVEL) {\n                _this.updater.setLevel(\"hardcore\");\n            }\n        };\n        this.triggerUpdate = function () {\n            _this.updater.triggerUpdate();\n        };\n        this.run = function () {\n            _this.updater.update();\n        };\n        this.snake = new _snake_Snake__WEBPACK_IMPORTED_MODULE_1__.Snake(this.triggerUpdate);\n        this.points = new _points_Points__WEBPACK_IMPORTED_MODULE_4__.Points(this.pointsHandler);\n        this.mergeUnit = new _mergeUnit_MergeUnit__WEBPACK_IMPORTED_MODULE_5__.MergeUnit(this.snake, this.arena, this.enemies, this.canvas, this.points);\n        this.updater = new _animationFrameUpdate_AnimationFrameUpdate__WEBPACK_IMPORTED_MODULE_6__.AnimationFrameUpdate(this.mergeUnit.updateHandler, this.mergeUnit.updateRecalculateHandler);\n    }\n    return Main;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/Main.ts?");

/***/ }),

/***/ "./src/main/animationFrameUpdate/AnimationFrameUpdate.ts":
/*!***************************************************************!*\
  !*** ./src/main/animationFrameUpdate/AnimationFrameUpdate.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimationFrameUpdate\": () => /* binding */ AnimationFrameUpdate\n/* harmony export */ });\nvar AnimationFrameUpdate = (function () {\n    function AnimationFrameUpdate(updateHandler, moveRecalcHandler) {\n        var _this = this;\n        this.updateHandler = updateHandler;\n        this.moveRecalcHandler = moveRecalcHandler;\n        this.level = \"easy\";\n        this.dropCounter = 0;\n        this.lastTime = 0;\n        this.levelMapToTimeReactionInMs = {\n            easy: 300,\n            normal: 200,\n            hard: 100,\n            hardcore: 80,\n        };\n        this.update = function (time) {\n            if (time === void 0) { time = 0; }\n            var deltaTime = time - _this.lastTime;\n            _this.lastTime = time;\n            _this.dropCounter += deltaTime;\n            if (_this.dropCounter > _this.levelMapToTimeReactionInMs[_this.level]) {\n                _this.moveRecalcHandler();\n                _this.dropCounter = 0;\n            }\n            _this.updateHandler();\n            requestAnimationFrame(_this.update);\n        };\n        this.triggerUpdate = function () {\n            _this.dropCounter = 1000;\n        };\n        this.setLevel = function (level) {\n            _this.level = level;\n        };\n    }\n    return AnimationFrameUpdate;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/animationFrameUpdate/AnimationFrameUpdate.ts?");

/***/ }),

/***/ "./src/main/arena/Arena.ts":
/*!*********************************!*\
  !*** ./src/main/arena/Arena.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Arena\": () => /* binding */ Arena\n/* harmony export */ });\n/* harmony import */ var _matrix_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix/Matrix */ \"./src/main/matrix/Matrix.ts\");\n\nvar Arena = (function () {\n    function Arena() {\n        this.getArenaMatrix = function () {\n            return _matrix_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.createMatrix(Arena.width, Arena.height, 8);\n        };\n    }\n    Arena.width = 40;\n    Arena.height = 40;\n    Arena.getRandomIndexForWidth = function () { return Math.floor(Math.random() * Arena.width); };\n    Arena.getRandomIndexForHeight = function () {\n        return Math.floor(Math.random() * Arena.height);\n    };\n    return Arena;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/arena/Arena.ts?");

/***/ }),

/***/ "./src/main/colors.ts":
/*!****************************!*\
  !*** ./src/main/colors.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colors\": () => /* binding */ colors\n/* harmony export */ });\nvar colors = [\n    null,\n    \"#FEF84C\",\n    \"#51E1FC\",\n    \"#E93D1E\",\n    \"#79AE3D\",\n    \"#F69230\",\n    \"#F16EB9\",\n    \"#943692\",\n    \"#2c3e50\",\n];\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/colors.ts?");

/***/ }),

/***/ "./src/main/enemies/Enemies.ts":
/*!*************************************!*\
  !*** ./src/main/enemies/Enemies.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemies\": () => /* binding */ Enemies\n/* harmony export */ });\n/* harmony import */ var _arena_Arena__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arena/Arena */ \"./src/main/arena/Arena.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar ENEMIES_COUNT = 15;\nvar getEnemiesLayout = function () {\n    return new Array(ENEMIES_COUNT).fill(0).map(function () { return ({\n        x: _arena_Arena__WEBPACK_IMPORTED_MODULE_0__.Arena.getRandomIndexForWidth(),\n        y: _arena_Arena__WEBPACK_IMPORTED_MODULE_0__.Arena.getRandomIndexForHeight(),\n    }); });\n};\nvar Enemies = (function () {\n    function Enemies() {\n        var _this = this;\n        this.enemies = getEnemiesLayout();\n        this.getOffsets = function () {\n            return __spreadArrays(_this.enemies);\n        };\n        this.deleteEnemy = function (enemy) {\n            var index = _this.enemies.findIndex(function (currEnemy) { return currEnemy.x === enemy.x && currEnemy.y === enemy.y; });\n            _this.enemies.splice(index, 1);\n            if (_this.enemies.length === 0) {\n                console.log(\"HELLO\");\n                _this.reloadEnemies();\n            }\n        };\n        this.reloadEnemies = function () {\n            _this.enemies = getEnemiesLayout();\n        };\n    }\n    return Enemies;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/enemies/Enemies.ts?");

/***/ }),

/***/ "./src/main/helpers/getMatrix.ts":
/*!***************************************!*\
  !*** ./src/main/helpers/getMatrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMatrix\": () => /* binding */ getMatrix\n/* harmony export */ });\n/* harmony import */ var _arena_Arena__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arena/Arena */ \"./src/main/arena/Arena.ts\");\n/* harmony import */ var _matrix_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matrix/Matrix */ \"./src/main/matrix/Matrix.ts\");\n\n\nvar getMatrix = function (_a) {\n    var offsets = _a.offsets, fill = _a.fill, matrix = _a.matrix;\n    var newMatrix = matrix || _matrix_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.createMatrix(_arena_Arena__WEBPACK_IMPORTED_MODULE_0__.Arena.width, _arena_Arena__WEBPACK_IMPORTED_MODULE_0__.Arena.height, 0);\n    for (var _i = 0, offsets_1 = offsets; _i < offsets_1.length; _i++) {\n        var snakeOffset = offsets_1[_i];\n        var x = snakeOffset.x, y = snakeOffset.y;\n        newMatrix[y][x] = fill;\n    }\n    return newMatrix;\n};\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/helpers/getMatrix.ts?");

/***/ }),

/***/ "./src/main/matrix/Matrix.ts":
/*!***********************************!*\
  !*** ./src/main/matrix/Matrix.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Matrix\": () => /* binding */ Matrix\n/* harmony export */ });\nvar Matrix = (function () {\n    function Matrix() {\n    }\n    Matrix.createMatrix = function (w, h, index) {\n        var matrix = [];\n        while (h--) {\n            matrix.push(new Array(w).fill(index));\n        }\n        return matrix;\n    };\n    return Matrix;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/matrix/Matrix.ts?");

/***/ }),

/***/ "./src/main/mergeUnit/MergeUnit.ts":
/*!*****************************************!*\
  !*** ./src/main/mergeUnit/MergeUnit.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MergeUnit\": () => /* binding */ MergeUnit\n/* harmony export */ });\n/* harmony import */ var _helpers_getMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getMatrix */ \"./src/main/helpers/getMatrix.ts\");\n\nvar MergeUnit = (function () {\n    function MergeUnit(snake, arena, enemies, canvas, points) {\n        var _this = this;\n        this.snake = snake;\n        this.arena = arena;\n        this.enemies = enemies;\n        this.canvas = canvas;\n        this.points = points;\n        this.updateHandler = function () {\n            var snakeOffsets = _this.snake.getOffsets();\n            var enemiesOffsets = _this.enemies.getOffsets();\n            _this.detectCollision(snakeOffsets, enemiesOffsets);\n            _this.snake.detectIfEnemyChangedToSnakeBody();\n            var arenaMatrix = _this.arena.getArenaMatrix();\n            var snakeMatrix = _this.snake.getMatrix();\n            var enemiesMatrix = (0,_helpers_getMatrix__WEBPACK_IMPORTED_MODULE_0__.getMatrix)({ offsets: enemiesOffsets, fill: 4 });\n            _this.canvas.drawMatrix(arenaMatrix);\n            _this.canvas.drawMatrix(enemiesMatrix);\n            _this.canvas.drawMatrix(snakeMatrix);\n        };\n        this.updateRecalculateHandler = function () {\n            _this.snake.recalculate();\n        };\n        this.detectCollision = function (snakeOffsets, enemiesOffsets) {\n            var snakeLength = snakeOffsets.length;\n            var headOfSnake = snakeOffsets[snakeLength - 1];\n            var enemyEaten = enemiesOffsets.find(function (_a) {\n                var x = _a.x, y = _a.y;\n                return headOfSnake.x === x && headOfSnake.y === y;\n            });\n            if (enemyEaten) {\n                if (_this.snake.addEatenEnemy(enemyEaten)) {\n                    _this.points.addPoints(100);\n                }\n                _this.enemies.deleteEnemy(enemyEaten);\n            }\n        };\n    }\n    return MergeUnit;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/mergeUnit/MergeUnit.ts?");

/***/ }),

/***/ "./src/main/points/Points.ts":
/*!***********************************!*\
  !*** ./src/main/points/Points.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Points\": () => /* binding */ Points\n/* harmony export */ });\nvar Points = (function () {\n    function Points(pointsSubscriber) {\n        var _this = this;\n        this.pointsSubscriber = pointsSubscriber;\n        this.isBadgeShown = false;\n        this.points = 0;\n        this.container = document.getElementById(\"points\");\n        this.update = function () {\n            _this.container.innerHTML = \"Score:  \" + _this.points;\n        };\n        this.addPoints = function (pointsToAdd) {\n            _this.points += pointsToAdd;\n            if (_this.points > 200 && !_this.isBadgeShown) {\n                alert(\"Blender smiec\");\n                _this.isBadgeShown = true;\n            }\n            _this.update();\n        };\n        this.update();\n        this.pointsSubscriber(this.points);\n    }\n    return Points;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/points/Points.ts?");

/***/ }),

/***/ "./src/main/snake/Snake.ts":
/*!*********************************!*\
  !*** ./src/main/snake/Snake.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snake\": () => /* binding */ Snake\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./src/main/types.ts\");\n/* harmony import */ var _arena_Arena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arena/Arena */ \"./src/main/arena/Arena.ts\");\n/* harmony import */ var _helpers_getMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getMatrix */ \"./src/main/helpers/getMatrix.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar SNAKE_OFFSET_LAYOUT = new Array(6)\n    .fill(0)\n    .map(function (_, i) { return ({ x: 0, y: i }); });\nvar Snake = (function () {\n    function Snake(updateTriggerHandler) {\n        var _this = this;\n        this.updateTriggerHandler = updateTriggerHandler;\n        this.lastMove = _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowDown;\n        this.snakeOffsets = SNAKE_OFFSET_LAYOUT;\n        this.eatenEnemiesOffsets = [];\n        this.snakeColorIndex = 3;\n        this.addControlHandlers = function () {\n            document.addEventListener(\"keydown\", function (event) {\n                switch (event.key) {\n                    case _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowDown:\n                    case _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowLeft:\n                    case _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowRight:\n                    case _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowUp:\n                        _this.lastMove = event.key;\n                        _this.updateTriggerHandler();\n                        break;\n                }\n            });\n        };\n        this.recalculate = function () {\n            var lengthOfSnake = _this.snakeOffsets.length;\n            var lastIndex = lengthOfSnake - 1;\n            var lastElement = __assign({}, _this.snakeOffsets[lastIndex]);\n            var lastIndexArenaX = _arena_Arena__WEBPACK_IMPORTED_MODULE_1__.Arena.width - 1;\n            var lastIndexArenaY = _arena_Arena__WEBPACK_IMPORTED_MODULE_1__.Arena.height - 1;\n            var newElement = __assign({}, lastElement);\n            if (_this.lastMove === _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowDown) {\n                var isBeyondBorder = lastElement.y >= lastIndexArenaY;\n                newElement = {\n                    x: lastElement.x,\n                    y: isBeyondBorder ? 0 : lastElement.y + 1,\n                };\n            }\n            if (_this.lastMove === _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowLeft) {\n                var isBeyondBorder = lastElement.x <= 0;\n                newElement = {\n                    x: isBeyondBorder ? lastIndexArenaX : lastElement.x - 1,\n                    y: lastElement.y,\n                };\n            }\n            if (_this.lastMove === _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowRight) {\n                var isBeyondBorder = lastElement.x >= lastIndexArenaX;\n                newElement = {\n                    x: isBeyondBorder ? 0 : lastElement.x + 1,\n                    y: lastElement.y,\n                };\n            }\n            if (_this.lastMove === _types__WEBPACK_IMPORTED_MODULE_0__.KeyboardArrows.ArrowUp) {\n                var isBeyondBorder = lastElement.y <= 0;\n                newElement = {\n                    x: lastElement.x,\n                    y: isBeyondBorder ? lastIndexArenaY : lastElement.y - 1,\n                };\n            }\n            _this.snakeOffsets.shift();\n            _this.snakeOffsets.push(newElement);\n        };\n        this.getOffsets = function () { return _this.snakeOffsets; };\n        this.addEatenEnemy = function (enemy) {\n            if (!_this.eatenEnemiesOffsets.includes(enemy)) {\n                _this.eatenEnemiesOffsets.push(enemy);\n                return true;\n            }\n            return false;\n        };\n        this.detectIfEnemyChangedToSnakeBody = function () {\n            var tail = _this.snakeOffsets[0];\n            var behindTail = _this.snakeOffsets[1];\n            var findEnemyBehindTailIndex = _this.eatenEnemiesOffsets.findIndex(function (eatenEnemy) {\n                if ((eatenEnemy.x === tail.x &&\n                    Math.abs(eatenEnemy.y - tail.y) === 1 &&\n                    behindTail.y !== eatenEnemy.y) ||\n                    (eatenEnemy.y === tail.y &&\n                        Math.abs(eatenEnemy.x - tail.x) === 1 &&\n                        behindTail.x !== eatenEnemy.x)) {\n                    return true;\n                }\n            });\n            if (findEnemyBehindTailIndex === -1) {\n                return;\n            }\n            console.log(findEnemyBehindTailIndex);\n            _this.snakeOffsets.unshift(_this.eatenEnemiesOffsets[findEnemyBehindTailIndex]);\n            _this.eatenEnemiesOffsets.splice(findEnemyBehindTailIndex, 1);\n        };\n        this.getMatrix = function () {\n            var snakeMatrix = (0,_helpers_getMatrix__WEBPACK_IMPORTED_MODULE_2__.getMatrix)({\n                offsets: _this.snakeOffsets,\n                fill: _this.snakeColorIndex,\n            });\n            var snakeWithEnemiesEaten = (0,_helpers_getMatrix__WEBPACK_IMPORTED_MODULE_2__.getMatrix)({\n                offsets: _this.eatenEnemiesOffsets,\n                fill: 6,\n                matrix: snakeMatrix,\n            });\n            return snakeWithEnemiesEaten;\n        };\n        this.addControlHandlers();\n    }\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/snake/Snake.ts?");

/***/ }),

/***/ "./src/main/types.ts":
/*!***************************!*\
  !*** ./src/main/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardArrows\": () => /* binding */ KeyboardArrows\n/* harmony export */ });\nvar KeyboardArrows;\n(function (KeyboardArrows) {\n    KeyboardArrows[\"ArrowDown\"] = \"ArrowDown\";\n    KeyboardArrows[\"ArrowLeft\"] = \"ArrowLeft\";\n    KeyboardArrows[\"ArrowRight\"] = \"ArrowRight\";\n    KeyboardArrows[\"ArrowUp\"] = \"ArrowUp\";\n})(KeyboardArrows || (KeyboardArrows = {}));\n\n\n//# sourceURL=webpack://SnakeGame/./src/main/types.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;