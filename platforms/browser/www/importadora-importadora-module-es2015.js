(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["importadora-importadora-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/importadora/importadora.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/importadora/importadora.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>importadora</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/importadora/importadora-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/importadora/importadora-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ImportadoraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportadoraPageRoutingModule", function() { return ImportadoraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _importadora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importadora.page */ "./src/app/importadora/importadora.page.ts");




const routes = [
    {
        path: '',
        component: _importadora_page__WEBPACK_IMPORTED_MODULE_3__["ImportadoraPage"]
    }
];
let ImportadoraPageRoutingModule = class ImportadoraPageRoutingModule {
};
ImportadoraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImportadoraPageRoutingModule);



/***/ }),

/***/ "./src/app/importadora/importadora.module.ts":
/*!***************************************************!*\
  !*** ./src/app/importadora/importadora.module.ts ***!
  \***************************************************/
/*! exports provided: ImportadoraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportadoraPageModule", function() { return ImportadoraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _importadora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./importadora-routing.module */ "./src/app/importadora/importadora-routing.module.ts");
/* harmony import */ var _importadora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importadora.page */ "./src/app/importadora/importadora.page.ts");







let ImportadoraPageModule = class ImportadoraPageModule {
};
ImportadoraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _importadora_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImportadoraPageRoutingModule"]
        ],
        declarations: [_importadora_page__WEBPACK_IMPORTED_MODULE_6__["ImportadoraPage"]]
    })
], ImportadoraPageModule);



/***/ }),

/***/ "./src/app/importadora/importadora.page.scss":
/*!***************************************************!*\
  !*** ./src/app/importadora/importadora.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0YWRvcmEvaW1wb3J0YWRvcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsaUJBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydGFkb3JhL2ltcG9ydGFkb3JhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuY29sb3I6IHdoaXRlc21va2U7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/importadora/importadora.page.ts":
/*!*************************************************!*\
  !*** ./src/app/importadora/importadora.page.ts ***!
  \*************************************************/
/*! exports provided: ImportadoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportadoraPage", function() { return ImportadoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");




let ImportadoraPage = class ImportadoraPage {
    constructor(route, api) {
        this.route = route;
        this.api = api;
    }
    ngOnInit() {
    }
};
ImportadoraPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"] }
];
ImportadoraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-importadora',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./importadora.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/importadora/importadora.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./importadora.page.scss */ "./src/app/importadora/importadora.page.scss")).default]
    })
], ImportadoraPage);



/***/ })

}]);
//# sourceMappingURL=importadora-importadora-module-es2015.js.map