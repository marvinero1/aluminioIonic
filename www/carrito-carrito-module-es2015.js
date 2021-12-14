(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrito-carrito-module"],{

/***/ "./src/app/carrito/carrito-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/carrito/carrito-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CarritoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageRoutingModule", function() { return CarritoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrito.page */ "./src/app/carrito/carrito.page.ts");




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_3__["CarritoPage"]
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ "./src/app/carrito/carrito.module.ts":
/*!*******************************************!*\
  !*** ./src/app/carrito/carrito.module.ts ***!
  \*******************************************/
/*! exports provided: CarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageModule", function() { return CarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrito-routing.module */ "./src/app/carrito/carrito-routing.module.ts");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrito.page */ "./src/app/carrito/carrito.page.ts");







let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarritoPageRoutingModule"]
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]]
    })
], CarritoPageModule);



/***/ })

}]);
//# sourceMappingURL=carrito-carrito-module-es2015.js.map