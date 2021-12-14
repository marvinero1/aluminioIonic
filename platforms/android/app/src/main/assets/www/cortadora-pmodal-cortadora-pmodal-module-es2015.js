(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cortadora-pmodal-cortadora-pmodal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-pmodal/cortadora-pmodal.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-pmodal/cortadora-pmodal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Crear Hoja De Calculo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/cortadora-pmodal/cortadora-pmodal-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cortadora-pmodal/cortadora-pmodal-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CortadoraPModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPModalPageRoutingModule", function() { return CortadoraPModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cortadora_pmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cortadora-pmodal.page */ "./src/app/cortadora-pmodal/cortadora-pmodal.page.ts");




const routes = [
    {
        path: '',
        component: _cortadora_pmodal_page__WEBPACK_IMPORTED_MODULE_3__["CortadoraPModalPage"]
    }
];
let CortadoraPModalPageRoutingModule = class CortadoraPModalPageRoutingModule {
};
CortadoraPModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CortadoraPModalPageRoutingModule);



/***/ }),

/***/ "./src/app/cortadora-pmodal/cortadora-pmodal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/cortadora-pmodal/cortadora-pmodal.module.ts ***!
  \*************************************************************/
/*! exports provided: CortadoraPModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPModalPageModule", function() { return CortadoraPModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cortadora_pmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cortadora-pmodal-routing.module */ "./src/app/cortadora-pmodal/cortadora-pmodal-routing.module.ts");
/* harmony import */ var _cortadora_pmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cortadora-pmodal.page */ "./src/app/cortadora-pmodal/cortadora-pmodal.page.ts");







let CortadoraPModalPageModule = class CortadoraPModalPageModule {
};
CortadoraPModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cortadora_pmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CortadoraPModalPageRoutingModule"]
        ],
        declarations: [_cortadora_pmodal_page__WEBPACK_IMPORTED_MODULE_6__["CortadoraPModalPage"]]
    })
], CortadoraPModalPageModule);



/***/ }),

/***/ "./src/app/cortadora-pmodal/cortadora-pmodal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/cortadora-pmodal/cortadora-pmodal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnRhZG9yYS1wbW9kYWwvY29ydGFkb3JhLXBtb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cortadora-pmodal/cortadora-pmodal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/cortadora-pmodal/cortadora-pmodal.page.ts ***!
  \***********************************************************/
/*! exports provided: CortadoraPModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPModalPage", function() { return CortadoraPModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CortadoraPModalPage = class CortadoraPModalPage {
    constructor() { }
    ngOnInit() {
    }
};
CortadoraPModalPage.ctorParameters = () => [];
CortadoraPModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cortadora-pmodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cortadora-pmodal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-pmodal/cortadora-pmodal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cortadora-pmodal.page.scss */ "./src/app/cortadora-pmodal/cortadora-pmodal.page.scss")).default]
    })
], CortadoraPModalPage);



/***/ })

}]);
//# sourceMappingURL=cortadora-pmodal-cortadora-pmodal-module-es2015.js.map