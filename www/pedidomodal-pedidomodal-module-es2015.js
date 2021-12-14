(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidomodal-pedidomodal-module"],{

/***/ "./src/app/pedidomodal/pedidomodal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pedidomodal/pedidomodal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PedidomodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidomodalPageRoutingModule", function() { return PedidomodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pedidomodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidomodal.page */ "./src/app/pedidomodal/pedidomodal.page.ts");




const routes = [
    {
        path: '',
        component: _pedidomodal_page__WEBPACK_IMPORTED_MODULE_3__["PedidomodalPage"]
    }
];
let PedidomodalPageRoutingModule = class PedidomodalPageRoutingModule {
};
PedidomodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidomodalPageRoutingModule);



/***/ }),

/***/ "./src/app/pedidomodal/pedidomodal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pedidomodal/pedidomodal.module.ts ***!
  \***************************************************/
/*! exports provided: PedidomodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidomodalPageModule", function() { return PedidomodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedidomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidomodal-routing.module */ "./src/app/pedidomodal/pedidomodal-routing.module.ts");
/* harmony import */ var _pedidomodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidomodal.page */ "./src/app/pedidomodal/pedidomodal.page.ts");








let PedidomodalPageModule = class PedidomodalPageModule {
};
PedidomodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _pedidomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidomodalPageRoutingModule"]
        ],
        declarations: [_pedidomodal_page__WEBPACK_IMPORTED_MODULE_6__["PedidomodalPage"]]
    })
], PedidomodalPageModule);



/***/ })

}]);
//# sourceMappingURL=pedidomodal-pedidomodal-module-es2015.js.map