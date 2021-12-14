(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-productos-mis-productos-module"],{

/***/ "./src/app/mis-productos/mis-productos-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/mis-productos/mis-productos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MisProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPageRoutingModule", function() { return MisProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mis_productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-productos.page */ "./src/app/mis-productos/mis-productos.page.ts");




const routes = [
    {
        path: '',
        component: _mis_productos_page__WEBPACK_IMPORTED_MODULE_3__["MisProductosPage"]
    }
];
let MisProductosPageRoutingModule = class MisProductosPageRoutingModule {
};
MisProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisProductosPageRoutingModule);



/***/ }),

/***/ "./src/app/mis-productos/mis-productos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mis-productos/mis-productos.module.ts ***!
  \*******************************************************/
/*! exports provided: MisProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPageModule", function() { return MisProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mis_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-productos-routing.module */ "./src/app/mis-productos/mis-productos-routing.module.ts");
/* harmony import */ var _mis_productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-productos.page */ "./src/app/mis-productos/mis-productos.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let MisProductosPageModule = class MisProductosPageModule {
};
MisProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _mis_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisProductosPageRoutingModule"]
        ],
        declarations: [_mis_productos_page__WEBPACK_IMPORTED_MODULE_6__["MisProductosPage"]]
    })
], MisProductosPageModule);



/***/ })

}]);
//# sourceMappingURL=mis-productos-mis-productos-module-es2015.js.map