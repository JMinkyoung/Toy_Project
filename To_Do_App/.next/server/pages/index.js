(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AddTodo.js":
/*!*******************************!*\
  !*** ./components/AddTodo.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/todo */ "./reducers/todo.js");

var _jsxFileName = "C:\\Users\\MK\\Documents\\GitHub\\Toy_Project\\To_Do_App\\components\\AddTodo.js";







const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "AddTodo__Wrapper",
  componentId: "sc-8rrp9c-0"
})(["display:flex;position:relative;margin-top:20px;"]);
const PlustButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.PlusCircleOutlined).withConfig({
  displayName: "AddTodo__PlustButton",
  componentId: "sc-8rrp9c-1"
})(["font-size:40px;position:relative;margin-left:40px;margin-top:20px;color:white;"]);
const InputToDo = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
  displayName: "AddTodo__InputToDo",
  componentId: "sc-8rrp9c-2"
})(["height:40px;width:350px;margin-top:20px;margin-left:10px;position:relative;color:black;font-size:15px;border:none;border-radius:5px;padding:0 0 0 0;"]);
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
  displayName: "AddTodo__FormWrapper",
  componentId: "sc-8rrp9c-3"
})(["display:flex;"]);
const RateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_5__.Rate).withConfig({
  displayName: "AddTodo__RateWrapper",
  componentId: "sc-8rrp9c-4"
})(["font-size:20px;margin-top:20px;margin-left:10px;"]);

const AddTodo = () => {
  const {
    0: buttonClicked,
    1: setButtonClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: rate,
    1: setRate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  const onClickPlus = () => {
    setButtonClicked(!buttonClicked);
  };

  const onChangeInput = e => {
    setText(e.target.value);
  };

  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    setRate(e);
  }, [rate]);

  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault();
    console.log(text, rate);
    dispatch((0,_reducers_todo__WEBPACK_IMPORTED_MODULE_7__.addTodo)({
      todo: text,
      rate
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlustButton, {
      onClick: onClickPlus
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, undefined), buttonClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormWrapper, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputToDo, {
        type: "text",
        placeholder: " \uD560\uC77C\uACFC \uC911\uC694\uB3C4\uB97C \uC785\uB825 \uD6C4 Enter\uB97C \uB204\uB974\uC138\uC694",
        onChange: onChangeInput,
        value: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RateWrapper, {
        onChange: onChange,
        value: rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddTodo);

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\MK\\Documents\\GitHub\\Toy_Project\\To_Do_App\\components\\AppLayout.js";


const AppLayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "AppLayout__AppLayoutWrapper",
  componentId: "sc-1qjforg-0"
})(["width:600px;height:800px;position:relative;background:#cee5d5;border-radius:16px;box-shadow:0 0 8px 0 rgba(0,0,0,0.04);margin:0 auto;margin-top:96px;margin-bottom:32px;display:flex;flex-direction:column;@media screen and (max-width:500px){background-color:red;}"]);

const AppLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppLayoutWrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTodo */ "./components/AddTodo.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\MK\\Documents\\GitHub\\Toy_Project\\To_Do_App\\pages\\index.js";






const store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__.default);

const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTodo__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./reducers/todo.js");


const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  todoReducer: _todo__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/todo.js":
/*!**************************!*\
  !*** ./reducers/todo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE": function() { return /* binding */ CREATE; },
/* harmony export */   "DELETE": function() { return /* binding */ DELETE; },
/* harmony export */   "TOGGLE": function() { return /* binding */ TOGGLE; },
/* harmony export */   "addTodo": function() { return /* binding */ addTodo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [{
  todo: '언우밤지 듣기',
  rate: 5,
  done: false
}, {
  todo: '밥 먹기',
  rate: 1,
  done: true
}];
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const TOGGLE = 'TOGGLE';
const addTodo = data => ({
  type: CREATE,
  data
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      console.log('create 액션수행');
      console.log(action);
      console.log(state);
      return [...state, {
        todo: action.data.todo,
        rate: action.data.rate,
        done: false
      }];

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (todoReducer);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19hcHAvLi9jb21wb25lbnRzL0FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vcmVkdWNlcnMvdG9kby5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL3RvX2RvX2FwcC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly90b19kb19hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RvX2RvX2FwcC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly90b19kb19hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJQbHVzdEJ1dHRvbiIsIlBsdXNDaXJjbGVPdXRsaW5lZCIsIklucHV0VG9EbyIsIkZvcm1XcmFwcGVyIiwiUmF0ZVdyYXBwZXIiLCJSYXRlIiwiQWRkVG9kbyIsImJ1dHRvbkNsaWNrZWQiLCJzZXRCdXR0b25DbGlja2VkIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInJhdGUiLCJzZXRSYXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tQbHVzIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImFkZFRvZG8iLCJ0b2RvIiwiQXBwTGF5b3V0V3JhcHBlciIsIkFwcExheW91dCIsImNoaWxkcmVuIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiSW5kZXgiLCJjb21iaW5lUmVkdWNlcnMiLCJ0b2RvUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImRvbmUiLCJDUkVBVEUiLCJERUxFVEUiLCJUT0dHTEUiLCJkYXRhIiwidHlwZSIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxNQUFNQSxPQUFPLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVEQUFiO0FBS0EsTUFBTUMsV0FBVyxHQUFHRCx3REFBTSxDQUFDRSxpRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNGQUFqQjtBQVFBLE1BQU1DLFNBQVMsR0FBR0gseUVBQUg7QUFBQTtBQUFBO0FBQUEsNEpBQWY7QUFhQSxNQUFNSSxXQUFXLEdBQUdKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFCQUFqQjtBQUlBLE1BQU1LLFdBQVcsR0FBR0wsd0RBQU0sQ0FBQ00sc0NBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3REFBakI7O0FBTUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLCtDQUFRLENBQUMsS0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEM7QUFFQSxRQUFNSyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FB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QWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBR0EsTUFBTWYsT0FBTyxHQUFJZ0IsSUFBRCxLQUFXO0FBQzlCQyxNQUFJLEVBQUVKLE1BRHdCO0FBRTlCRztBQUY4QixDQUFYLENBQWhCOztBQUtQLE1BQU1OLFdBQVcsR0FBRyxDQUFDUSxLQUFLLEdBQUdQLFlBQVQsRUFBdUJRLE1BQXZCLEtBQWtDO0FBQ2xELFVBQVFBLE1BQU0sQ0FBQ0YsSUFBZjtBQUNJLFNBQUtKLE1BQUw7QUFDSWYsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWW9CLE1BQVo7QUFDQXJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbUIsS0FBWjtBQUNBLGFBQU8sQ0FDSCxHQUFHQSxLQURBLEVBRUg7QUFDSWpCLFlBQUksRUFBRWtCLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZZixJQUR0QjtBQUVJaEIsWUFBSSxFQUFFa0MsTUFBTSxDQUFDSCxJQUFQLENBQVkvQixJQUZ0QjtBQUdJMkIsWUFBSSxFQUFFO0FBSFYsT0FGRyxDQUFQOztBQVFKO0FBQ0ksYUFBT00sS0FBUDtBQWRSO0FBZ0JILENBakJEOztBQW1CQSwrREFBZVIsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHtSYXRlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCAgeyBQbHVzQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQge2FkZFRvZG99IGZyb20gJy4uL3JlZHVjZXJzL3RvZG8nXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuYFxyXG5jb25zdCBQbHVzdEJ1dHRvbiA9IHN0eWxlZChQbHVzQ2lyY2xlT3V0bGluZWQpYFxyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gXHJcblxyXG5jb25zdCBJbnB1dFRvRG8gPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwIDtcclxuYFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZm9ybWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBSYXRlV3JhcHBlciA9IHN0eWxlZChSYXRlKWBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuYDtcclxuIFxyXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2J1dHRvbkNsaWNrZWQsIHNldEJ1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMyk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvbkNsaWNrUGx1cyA9ICgpID0+IHtcclxuICAgICAgICBzZXRCdXR0b25DbGlja2VkKCFidXR0b25DbGlja2VkKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFJhdGUoZSk7XHJcbiAgICB9LFtyYXRlXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIOyDiOuhnOqzoOy5qCDrsKnsp4BcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dCwgcmF0ZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9kbyh7XHJcbiAgICAgICAgICAgIHRvZG86dGV4dCxcclxuICAgICAgICAgICAgcmF0ZVxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPFBsdXN0QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tQbHVzfS8+XHJcbiAgICAgICAge2J1dHRvbkNsaWNrZWQgJiYgKFxyXG4gICAgICAgICAgICA8Rm9ybVdyYXBwZXIgb25TdWJtaXQ9e29uU3VibWl0fSA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRUb0RvIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIg7ZWg7J286rO8IOykkeyalOuPhOulvCDsnoXroKUg7ZuEIEVudGVy66W8IOuIhOultOyEuOyalFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17dGV4dH0vPlxyXG4gICAgICAgICAgICAgICAgPFJhdGVXcmFwcGVyIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3JhdGV9IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuY29uc3QgQXBwTGF5b3V0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kIDojY2VlNWQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsMCwwLDAuMDQpO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDk2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAvLyDrqqjrsJTsnbwg7ISk7KCVIOyVhOyngSDslYjtlahcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG5gO1xyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXBwTGF5b3V0V3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkVG9kbyc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxBZGRUb2RvLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0b2RvUmVkdWNlciBmcm9tICcuL3RvZG8nO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgdG9kb1JlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdG9kbzogJ+yWuOyasOuwpOyngCDrk6PquLAnLFxyXG4gICAgICAgIHJhdGU6IDUsXHJcbiAgICAgICAgZG9uZTogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIHRvZG86ICfrsKUg66i56riwJyxcclxuICAgICAgICByYXRlOiAxLFxyXG4gICAgICAgIGRvbmU6IHRydWVcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEUgPSAnQ1JFQVRFJztcclxuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xyXG5leHBvcnQgY29uc3QgVE9HR0xFID0gJ1RPR0dMRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IENSRUFURSxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgdG9kb1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ1JFQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIOyVoeyFmOyImO2WiScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvOiBhY3Rpb24uZGF0YS50b2RvLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGU6IGFjdGlvbi5kYXRhLnJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTsgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvUmVkdWNlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==