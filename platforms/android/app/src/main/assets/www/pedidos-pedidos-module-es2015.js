(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button disabled=\"true\">\r\n          <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Historial Pedidos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content no-padding>\r\n    <div class=\"ion-content\" padding><br>\r\n      <ion-item-group>\r\n        <ion-item>\r\n          <p style=\"margin-block-start: 0em; margin-block-end: 0em;\">\r\n            <strong>Productos En Historial</strong>\r\n          </p>\r\n        </ion-item>\r\n        \r\n        <ion-item-sliding *ngFor=\"let element of pedidos$\">\r\n          <ion-item lines=\"none\">\r\n            <ion-thumbnail slot=\"start\">\r\n              <img src=\"http://altools.es/{{element.imagen}}\">\r\n              <!-- <img src=\"http://192.168.1.7:5000/{{element.imagen}}\"> -->\r\n\r\n            </ion-thumbnail>\r\n            <ion-label text-wrap>\r\n              <p><strong>{{element.nombre}} </strong></p>\r\n              <p>{{element.importadora}}</p>\r\n              <!-- <p>{{element.disponibilidad}}</p> -->\r\n              <!-- <div class=\"ec-stars-wrapper\">\r\n                <a data-value=\"1\" title=\"Votar con 1 estrellas\">&#9733;</a>\r\n                <a data-value=\"2\" title=\"Votar con 2 estrellas\">&#9733;</a>\r\n                <a data-value=\"3\" title=\"Votar con 3 estrellas\">&#9733;</a>\r\n                <a data-value=\"4\" title=\"Votar con 4 estrellas\">&#9733;</a>\r\n                <a data-value=\"5\" title=\"Votar con 5 estrellas\">&#9733;</a>\r\n              </div> -->\r\n            </ion-label>\r\n            <!-- <ion-button (click)=\"show(element)\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon> \r\n            </ion-button> -->\r\n            \r\n          </ion-item>\r\n  \r\n          <!-- <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"presentAlertConfirm(element)\">\r\n              <ion-icon class=\"icongarbage\" slot=\"icon-only\" name=\"trash\"></ion-icon>Eliminar\r\n            </ion-item-option>\r\n          </ion-item-options> -->\r\n        </ion-item-sliding>\r\n      </ion-item-group>\r\n      <!-- <ion-item-group>\r\n        <ion-item>\r\n          <p style=\"color:#157424; margin-block-start: 0em; margin-block-end: 0em;\"><strong>Corredores destacados</strong>\r\n          </p>\r\n        </ion-item>\r\n        <ion-item-sliding *ngFor=\"let item of [1,2,3,4,5,6]\">\r\n          <ion-item lines=\"none\">\r\n            <ion-thumbnail slot=\"start\">\r\n              <img src=\"assets/images/corredor.png\">\r\n            </ion-thumbnail>\r\n            <ion-label text-wrap>\r\n              <p style=\"color:#157424;\"><strong>Juan Carlos</strong></p>\r\n              <p>Asociado titanium</p>\r\n              <div class=\"ec-stars-wrapper\">\r\n                <a data-value=\"1\" title=\"Votar con 1 estrellas\">&#9733;</a>\r\n                <a data-value=\"2\" title=\"Votar con 2 estrellas\">&#9733;</a>\r\n                <a data-value=\"3\" title=\"Votar con 3 estrellas\">&#9733;</a>\r\n                <a data-value=\"4\" title=\"Votar con 4 estrellas\">&#9733;</a>\r\n                <a data-value=\"5\" title=\"Votar con 5 estrellas\">&#9733;</a>\r\n              </div>\r\n            </ion-label>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"danger\" (click)=\"unread(item)\">\r\n              <ion-icon class=\"icongarbage\" slot=\"icon-only\" name=\"trash\"></ion-icon>Eliminar\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-item-group> -->\r\n      <br>\r\n    </div>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/pedidos/pedidos-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function() { return PedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/*! exports provided: PedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-routing.module */ "./src/app/pedidos/pedidos-routing.module.ts");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pedidos/pedidos.page.ts");







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })
], PedidosPageModule);



/***/ }),

/***/ "./src/app/pedidos/pedidos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVkaWRvcy9wZWRpZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pedidos/pedidos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pedidos/pedidos.page.ts ***!
  \*****************************************/
/*! exports provided: PedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPage", function() { return PedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let PedidosPage = class PedidosPage {
    constructor(api, alertController, router) {
        this.api = api;
        this.alertController = alertController;
        this.router = router;
        this.pedidos$ = [];
    }
    ngOnInit() {
        this.getPedido();
    }
    getPedido() {
        this.api.getAllObject('getPedidoRealizado')
            .subscribe((res) => {
            this.pedidos$ = res;
            console.log(this.pedidos$);
        });
    }
    perfil() {
        this.router.navigate(['/perfil']);
    }
};
PedidosPage.ctorParameters = () => [
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pedidos.page.scss */ "./src/app/pedidos/pedidos.page.scss")).default]
    })
], PedidosPage);



/***/ })

}]);
//# sourceMappingURL=pedidos-pedidos-module-es2015.js.map